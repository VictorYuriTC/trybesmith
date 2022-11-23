import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import FieldsValidation from '../middlewares/products/FieldsValidation';

const fieldsValidation = new FieldsValidation();

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