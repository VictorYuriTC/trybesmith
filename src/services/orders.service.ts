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

  public async addNewOrder(userId: number, productsIds: number[]): Promise<Order> {
    const addedOrder = await this.model.addNewOrder(userId, productsIds);

    return addedOrder;
  }
}

export default OrdersService;