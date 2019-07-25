import Product from '../models/product';
import Util from '../utils/Utils';

const util = new Util();

class ProductsController {
  static async getAllProducts(req, res) {
    await Product.find()
    .then(function(products) {  
      if(products.length > 0) {
        util.setSuccess(200, 'products found', products);
      } else {
        util.setSuccess(200, 'No products');
      }
    })
    .catch(function(prodErr) {
      util.setError(400, 'all products finding error', prodErr);
    });
    return util.send(res);
  }

  static async getProduct(req, res) {
    var productId = req.params.id;
    
    await Product.findById(productId)
    .then(function(product) {
      if (product) {
        util.setSuccess(200, 'product found', product);
      } else {
        util.setError(404, 'product not found');
      }
    })
    .catch(function(prodErr) {
      util.setError(400, 'product finding error', prodErr);
    });
    return util.send(res);
  }
}

export default ProductsController;