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
    const addedOrderData = await this.connection
      .execute<ResultSetHeader>(' INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [userId]);

    const [addedOrder] = addedOrderData;
    const { insertId } = addedOrder;

    const addedProductsPromises = productsIds.map((id) => this.connection
      .execute<ResultSetHeader>(
      `
        UPDATE Trybesmith.Products
        SET
          orderId = ?
        WHERE
          id = ?
      `,
      [insertId, id],
    ));

    await Promise.all(addedProductsPromises);

    return { id: insertId, productsIds, userId };
  }
}

export default OrdersModel;