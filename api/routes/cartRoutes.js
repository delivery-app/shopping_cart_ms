import { Router } from 'express';
import CartController from '../controllers/cart_controller';

const router = Router();

router.get('/', CartController.getAllCarts);
router.get('/:id', CartController.getCart);
router.post('/', CartController.createCart);
router.put('/:id', CartController.updateCart);
router.delete('/:id', CartController.destroyCart);


export default router;
