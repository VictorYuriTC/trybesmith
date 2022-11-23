import { Request, Response, NextFunction } from 'express';
import OrdersService from '../services/orders.service';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (req: Request, res: Response, _next: NextFunction) => {
    const allOrders = await this.ordersService.getAllOrders();

    return res.status(200).json(allOrders);
  };
}

export default OrdersController;