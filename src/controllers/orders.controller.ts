import { Request, Response, NextFunction } from 'express';
import OrdersService from '../services/orders.service';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (req: Request, res: Response, _next: NextFunction) => {
    const allOrders = await this.ordersService.getAllOrders();

    return res.status(200).json(allOrders);
  };

  public addNewOrder = async (req: Request, res: Response, _next: NextFunction) => {
    const { productsIds } = req.body;
    const { authorization } = req.headers;
    const userId = 10;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    await this.ordersService.addNewOrder(userId, productsIds);

    return res.status(201).json({ userId, productsIds });
  };
}

export default OrdersController;