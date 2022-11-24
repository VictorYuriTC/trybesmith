import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class UsersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async addNewUser(newUser: User): Promise<User> {
    const { username, classe, level, password } = newUser;
    const result = await this.connection
      .execute<ResultSetHeader>(
      `
        INSERT INTO Trybesmith.Users
          (username, classe, level, password)
        VALUES
          (?, ?, ?, ?)`,
      [username, classe, level, password],
    );
    
    const [addedUser] = result;
    const { insertId } = addedUser;

    return { id: insertId, ...newUser } as User;
  }
}

export default UsersModel;