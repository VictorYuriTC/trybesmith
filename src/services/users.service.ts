import UsersModel from '../models/users.model';
import connection from '../models/connection';
import User from '../interfaces/user.interface';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async addNewUser(newUser: User): Promise<User> {
    const addedUser = await this.model.addNewUser(newUser);

    return addedUser;
  }
}

export default UsersService;