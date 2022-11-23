import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public addNewProduct = async (req: Request, res: Response, _next: NextFunction) => {
    const newProduct = req.body;

    const addedProduct = await this.productsService.addNewProduct(newProduct);

    return res.status(201).json(addedProduct);
  };
}

export default ProductsController;