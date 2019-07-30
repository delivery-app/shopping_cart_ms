import { Router } from 'express';
import CartsController from '../controllers/carts_controller';

const router = Router();

router.get('/', CartsController.getAllCarts);
router.get('/:id', CartsController.getCart);
router.get('/user_actual_cart/:user_id', CartsController.checkActualCart);
router.post('/', CartsController.createCart);
router.put('/:id', CartsController.updateCart);
router.delete('/:id', CartsController.destroyCart);
router.post('/:id/add_product', CartsController.addToCart);
router.post('/:id/remove_product', CartsController.removeFromCart);

export default router;
