import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async addNewOrder(userId:number, productsIds: number[]): Promise<Order> {
    const result = await this.connection
      .execute<ResultSetHeader>(
      `
        INSERT INTO Trybesmith.Orders
          (userId, productsIds)
        VALUES
          (?, ?)`,
      [userId, productsIds],
    );

    const [addedOrder] = result;
    const { insertId } = addedOrder;

    return { id: insertId, productsIds, userId };
  }
}

export default OrdersModel;