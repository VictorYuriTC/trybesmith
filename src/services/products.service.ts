import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async addNewProduct(newProduct: Product):Promise<Product> {
    const addedProduct = await this.model.addNewProduct(newProduct);

    return addedProduct;
  }

  public async getAllProducts(): Promise<Product[]> {
    const allProducts = await this.model.getAllProducts();

    return allProducts;
  }
}

export default ProductService;