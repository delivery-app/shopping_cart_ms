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

  /// management of products inside shopping cart
  static productExists(product, cart) {
    var exists = false;

    cart.items.forEach(item => { 
      console.log('here', item);
      if(item._id == product._id) {
        item.qty += product.qty;
        console.log(item);
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
        if (!CartsController.productExists(product, cart)) {
          cart.items.push(product);
        }
        console.log(cart)
        await Cart.update(cart)
        .then(function(updatedCart) {
          console.log('WTF', updatedCart);
          util.setSuccess(201, 'Product successfully added', updatedCart);
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
  /*

    static removeFromCart(id = 0, cart) {
        for(let i = 0; i < cart.items.length; i++) {
            let item = cart.items[i];
            if(item.id === id) {
                cart.items.splice(i, 1);
                this.calculateTotals(cart);
            }
        }

    }
    static calculateTotals(cart) {
        cart.totals = 0.00;
        cart.items.forEach(item => {
            let price = item.price;
            let qty = item.qty;
            let amount = price * qty;

            cart.totals += amount;
        });
        this.setFormattedTotals(cart);
    }

   static emptyCart(request) {
        
        if(request.session) {
            request.session.cart.items = [];
            request.session.cart.totals = 0.00;
            request.session.cart.formattedTotals = '';
        }


    }
*/
}

export default CartsController;