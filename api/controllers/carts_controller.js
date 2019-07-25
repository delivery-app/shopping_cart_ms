import Cart from '../models/cart';
import Util from '../utils/Utils';

const util = new Util();

class CartsController {
  /// CRUD logic based on REST 
  static async getAllCarts(req, res) {
    await Cart.find()
    .then(function(carts) {  
      if(carts.length > 0) {
        util.setSuccess(200, 'Carts found', carts);
      } else {
        util.setSuccess(200, 'No carts');
      }
    })
    .catch(function(cartErr) {
      util.setError(400, 'all cart findig error', cartErr);
    });
    return util.send(res);
  }

  static async getCart(req, res) {
    var cartId = req.params.id;
    
    await Cart.findById(cartId)
    .then(function(cart) {
      if (cart) {
        util.setSuccess(200, 'Cart found', cart);
      } else {
        util.setError(404, 'Cart not found');
      }
    })
    .catch(function(cartErr) {
      util.setError(400, 'Cart finding error', cartErr);
    });
    return util.send(res);
  }

  static async createCart(req, res) {
    var newCart = new Cart(req.body.cart);
    
    await newCart.save()
    .then(function(createdCart) {
      util.setSuccess(201, 'Cart successfully created', createdCart);
    })
    .catch(function(cartErr) {
      util.setError(400, 'Cart creation error', cartErr);
    });
    return util.send(res);
  }

  static async updateCart(req, res) {
    var cartId = req.params.id;
    var cart = req.body.cart;

    await Cart.findByIdAndUpdate(cartId, cart, {new: true})
    .then(function(updatedCart) {
      if (updatedCart) {
        util.setSuccess(200, 'Cart successfully updated', updatedCart);
      } else {
        util.setError(404, 'No cart with given id');
      }
    })
    .catch(function(cartErr) {
      util.setError(400, 'Cart update error', cartErr);
    });
    return util.send(res);
  }

  static async destroyCart(req, res) {
    var cartId = req.params.id;

    await Cart.findByIdAndDelete(cartId)
    .then(function(deletedCart){
      if (deletedCart) {
        util.setSuccess(200, 'Cart successfully deleted', deletedCart);
      } else {
        util.setError(404, 'No cart with given id');  
      }
    })
    .catch(function(cartErr) {
      util.setError(400, 'Cart deletion error', cartErr);
    });
    return util.send(res);
  }

  // adds or removes a item by changin its quantity
  static changeProductQty(product, actionQty, action) {
    if (action === 'add') {
      product.qty += actionQty;
    } 
    else if (action === 'remove') {
      product.qty -= actionQty;
    }
  }

  static ProductExists(product, cart, action) {
    var exists = false;

    cart.items.forEach((item, index) => { 
      if(item._id == product._id) {
        CartsController.changeProductQty(item, product.qty, action);
        CartsController.checkProductQty(item, index, cart);

        exists = true;
      }
    });
    return exists;
  }

  static async addToCart(req, res) {
    var cartId = req.params.id;
    var product = req.body.product;

    await Cart.findById(cartId)
    .then(async function(cart) {
      if (cart) {  
        if (!CartsController.ProductExists(product, cart, 'add')) {
          cart.items.push(product);
        } 

        await cart.update({'items': cart.items})
        .then(function() {
          util.setSuccess(200, 'Product successfully added', cart);
        })
        .catch(function(cartErr) {
          util.setError(400, 'Cart updating error', cartErr);
        });
      } else {
        util.setError(404, 'Cart not found');
      }
    })
    .catch(function(cartErr) {
      util.setError(400, 'Product adding error', cartErr);
    });
    return util.send(res);
  }

  // when product has 0 quantity remove it
  static checkProductQty(product, productIndex, cart) {
    if (product.qty <= 0) {
      cart.items.splice(productIndex, 1);
    }
  }

  static async removeFromCart(req, res) {
    var cartId = req.params.id;
    var product = req.body.product;

    await Cart.findById(cartId)
    .then(async function(cart) {
      if (cart) {  
        CartsController.ProductExists(product, cart, 'remove');

        await cart.update({'items': cart.items})
        .then(function() {
          util.setSuccess(200, 'Product successfully removed', cart);
        })
        .catch(function(cartErr) {
          util.setError(400, 'Cart updating error', cartErr);
        });
      } else {
        util.setError(404, 'Cart not found');
      }
    })
    .catch(function(cartErr) {
      util.setError(400, 'Product removing error', cartErr);
    });
    return util.send(res);
  }
}

export default CartsController;
