import { Router } from 'express';
import ProductsController from '../controllers/products_controller';

const router = Router();

router.get('/', ProductsController.getAllProducts);
router.get('/:id', ProductsController.getProduct);

/* if there's time we can create this routes and respective actions
router.post('/', ProductsController.createProduct);
router.put('/:id', ProductsController.updateProduct);
router.delete('/:id', ProductsController.destroyProduct);
*/
export default router;
