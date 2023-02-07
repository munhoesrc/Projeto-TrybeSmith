// pra chamar no controller
import { IOrder } from '../interfaces';
import OrderModel from '../models/OrderModel';
import connection from '../models/connection';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async () => {
    const putOrder: IOrder[] = await this.model.getAll();
    return putOrder;
  };
}
