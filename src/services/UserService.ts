// pra chamar no controller
import { IUser, IToken } from '../interfaces';
import UserModel from '../models/UserModels';
import connection from '../models/connection';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: IUser) => {
    const creating: IToken = await this.model.create(user);
    return creating;
  };
}
