export interface IProduct {
  name: string,
  amount: string,
}

export interface Product extends IProduct {
  id: number,
}

export interface IProductList extends IProduct {
  id: number,
  orderId: number | null,
}

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IToken {
  token: string,
}

export interface Payload {
  id: number,
  username: string,
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[]
}