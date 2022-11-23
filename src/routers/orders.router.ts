import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersController = new OrdersController();

const router = Router();

router.get('', ordersController.getAllOrders);

export default router;