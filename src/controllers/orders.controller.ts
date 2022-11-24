import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Payload from '../interfaces/payload.interface';
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

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    
    const decoded = jwt.decode(authorization) as Payload;
    
    const { id } = decoded;
    await this.ordersService.addNewOrder(id, productsIds);

    return res.status(201).json({ userId: id, productsIds });
  };
}

export default OrdersController;