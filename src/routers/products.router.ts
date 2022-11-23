import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsController = new ProductsController();

const router = Router();

router.post('/', productsController.addNewProduct);

export default router;