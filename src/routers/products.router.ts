import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import ProductsFieldsValidation from '../middlewares/products/ProductsFieldsValidation';

const fieldsValidation = new ProductsFieldsValidation();

const productsController = new ProductsController();

const router = Router();

router.get('/', productsController.getAllProducts);
router.post(
  '/',
  fieldsValidation.validateNameField,
  fieldsValidation.validateAmountField,
  productsController.addNewProduct,
);

export default router;