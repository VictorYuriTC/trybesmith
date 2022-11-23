import Login from '../interfaces/login.interface';
import User from '../interfaces/user.interface';
import LoginModel from '../models/login.model';
import connection from '../models/connection';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(loginData: Login): Promise<User> {
    const loggedUser = await this.model.login(loginData);

    return loggedUser;
  }
}

export default LoginService;