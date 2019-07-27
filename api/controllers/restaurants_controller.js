import Restaurant from '../models/restaurant';
import Product from '../models/product';
import Util from '../utils/Utils';

const util = new Util();

class RestaurantsController {
  static async getAllRestaurants(req, res) {
    await Restaurant.find()
    .then(function(restaurants) {  
      if(restaurants.length > 0) {
        util.setSuccess(200, 'restaurants found', restaurants);
      } else {
        util.setSuccess(200, 'No restaurants');
      }
    })
    .catch(function(prodErr) {
      util.setError(400, 'all restaurants finding error', prodErr);
    });
    return util.send(res);
  }

  static async getRestaurant(req, res) {
    var restaurantId = req.params.id;
    
    await Restaurant.findById(restaurantId)
    .then(function(restaurant) {
      if (restaurant) {
        util.setSuccess(200, 'restaurant found', restaurant);
      } else {
        util.setError(404, 'restaurant not found');
      }
    })
    .catch(function(prodErr) {
      util.setError(400, 'restaurant finding error', prodErr);
    });
    return util.send(res);
  }

  static async getProducts(req, res) {
    var restaurantId = req.params.id;

    await Product.find({'restaurant_id': restaurantId})
    .then(function(restProducts) {  
      if(restProducts.length > 0) {
        util.setSuccess(200, 'Restaurant products found', restProducts);
      } else {
        util.setSuccess(200, 'No restaurant products');
      }
    })
    .catch(function(restProductErr) {
      util.setError(400, 'Restaurant products finding error', prodErr);
    });
    return util.send(res);
  }
}

export default RestaurantsController;