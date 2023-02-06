import { IProduct, Product, IProductList } from '../interfaces';
import ProductModel from '../models/ProductModel';
import connection from '../models/connection';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: IProduct) => {
    const created: Product = await this.model.create(product);
    return created;
  };

  public getAll = async () => {
    const products: IProductList[] = await this.model.getAll();
    return products;
  };
}