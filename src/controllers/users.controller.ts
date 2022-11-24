import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/users.service';

import generateNewJWT from '../jwt/generateToken';
import Payload from '../interfaces/payload.interface';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public addNewUser = async (req: Request, res: Response, _next: NextFunction) => {
    const newUser = req.body;
    const addedUser = await this.usersService.addNewUser(newUser);
    const { id, username, classe, level } = addedUser as Payload;

    const token = generateNewJWT({ id, username, classe, level });

    return res.status(201).json({ token });
  };
}

export default UsersController;