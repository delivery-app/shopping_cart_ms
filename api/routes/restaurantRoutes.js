import { Router } from 'express';
import RestaurantsController from '../controllers/restaurants_controller';

const router = Router();

router.get('/', RestaurantsController.getAllRestaurants);
router.get('/:id', RestaurantsController.getRestaurant);
router.get('/:id/products', RestaurantsController.getProducts);

/* if there's time we can create this routes and respective actions
router.post('/', RestaurantsController.createRestaurant);
router.put('/:id', RestaurantsController.updateRestaurant);
router.delete('/:id', RestaurantsController.destroyRestaurant);
*/
export default router;
