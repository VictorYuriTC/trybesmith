import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/login.service';
import generateNewJWT from '../jwt/generateToken';
import * as messages from '../responses/messages';
import Payload from '../interfaces/payload.interface';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response, _next: NextFunction) => {
    const loginData = req.body;

    if (!loginData.username) {
      return res.status(400).json({ message: messages.getIsRequiredMsgByField('username') });
    }
  
    if (!loginData.password) {
      return res.status(400).json({ message: messages.getIsRequiredMsgByField('password') });
    }

    const loggedUser = await this.loginService.login(loginData);

    if (!loggedUser) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const { id, username } = loggedUser as Payload;

    const token = generateNewJWT({ id, username });

    return res.status(200).json({ token });
  };
}

export default LoginController;