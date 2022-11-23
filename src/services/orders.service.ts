import Order from '../interfaces/order.interface';
import OrdersModel from '../models/orders.model';
import connection from '../models/connection';

class OrdersService {
  public model: OrdersModel;
  
  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAllOrders(): Promise<Order[]> {
    const allOrders = await this.model.getAllOrders();

    return allOrders;
  }
}

export default OrdersService;