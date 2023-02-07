import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // A função SQL / JSON JSON_ARRAYAGG é uma função agregada.
  // Ele pega como entrada uma coluna de expressões SQL,
  // converte cada expressão em um valor JSON e retorna uma única matriz JSON que contém esses valores JSON.
  public getAll = async (): Promise<IOrder[]> => {
    const query = `SELECT orders.id, orders.user_id as userId,
    JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders JOIN Trybesmith.products
    ON ProductService.order_id = orders.id GROUP BY orders.id`;

    const [db] = await this.connection.execute(query);
    return db as IOrder[];
  };
}