import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/users.service';
import User from '../interfaces/user.interface';

import generateNewJWT from '../jwt/generateToken';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public addNewUser = async (req: Request, res: Response, _next: NextFunction) => {
    const newUser = req.body;
    const addedUser = await this.usersService.addNewUser(newUser);
    const { id, username, classe, level } = addedUser;

    const token = generateNewJWT({ id, username, classe, level } as User);

    return res.status(201).json({ token });
  };
}

export default UsersController;