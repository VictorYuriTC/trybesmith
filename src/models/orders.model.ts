import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    const result = await this.connection
      .execute(
        `SELECT *
        FROM Trybesmith.Orders
      `,
      );

    const [rows] = result;
    return rows as Order[];
  }
}

export default OrdersModel;