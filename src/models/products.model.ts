import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async addNewProduct(newProduct: Product): Promise<Product> {
    const { name, amount } = newProduct;
    const result = await this.connection
      .execute<ResultSetHeader>(
      `
        INSERT INTO Trybesmith.Products
          (name, amount)
        VALUES
          (?, ?)`,
      [name, amount],
    );

    const [addedProduct] = result;
    const { insertId } = addedProduct;

    return { id: insertId, ...newProduct };
  }

  public async getAllProducts(): Promise<Product[]> {
    const result = await this.connection
      .execute(`
        SELECT *
        FROM Trybesmith.Products
      `);

    const [rows] = result;
    return rows as Product[];
  }
}

export default ProductsModel;