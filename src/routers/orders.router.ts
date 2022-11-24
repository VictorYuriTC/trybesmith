import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import validateToken from '../jwt/validateToken';
import OrdersFieldsValidation from '../middlewares/orders/OrdersFieldsValidation';

const fieldsValidation = new OrdersFieldsValidation();

const ordersController = new OrdersController();

const router = Router();

router.get('/', ordersController.getAllOrders);
router.use(validateToken);
router.post(
  '/',
  fieldsValidation.validateProductsIds,
  ordersController.addNewOrder,
);

export default router;