import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    console.log('start');
    const result = await this.connection
      .execute(
        `SELECT orders.id, orders.userId,
          JSON_ARRAYAGG(products.id) AS productsIds
        FROM
          Trybesmith.Orders AS orders
        INNER JOIN
          Trybesmith.Products AS products
        ON
          products.orderId = orders.id
        GROUP BY
          orders.id
      `,
      );
      
    console.log(result);
    const [rows] = result;
    return rows as Order[];
  }
}

export default OrdersModel;