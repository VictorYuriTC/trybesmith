import { Pool } from 'mysql2/promise';
import Login from '../interfaces/login.interface';
import User from '../interfaces/user.interface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(loginData: Login): Promise<User> {
    const result = await this.connection
      .execute(
        `
        SELECT
          *
        FROM
          Trybesmith.Users
        WHERE
          username = ?
        AND 
          password = ?`,
        [loginData.username, loginData.password],
      );

    const [rows] = result;
    const [user] = rows as User[];

    return user;
  }
}

export default LoginModel;