import { Response, Request, NextFunction } from 'express';
import * as messages from '../../responses/messages';

class UsersFieldsValidation {
  public validateUsernameField = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ message: messages.getIsRequiredMsgByField('username') });
    }

    if (typeof username !== 'string') {
      return res.status(422).json({ message: messages.getMustBeStringMsgByField('username') });
    }

    if (username.length < 3) {
      return res.status(422).json({ message: messages
        .getMinLengthMsgByFieldAndMinLength('username', 3) });
    }

    next();
  };

  public validateClasseField = async (req: Request, res: Response, next: NextFunction) => {
    const { classe } = req.body;

    if (!classe) {
      return res.status(400).json({ message: messages.getIsRequiredMsgByField('classe') });
    }

    if (typeof classe !== 'string') {
      return res.status(422).json({ message: messages.getMustBeStringMsgByField('classe') });
    }

    if (classe.length < 3) {
      return res.status(422).json({ message: messages
        .getMinLengthMsgByFieldAndMinLength('classe', 3) });
    }

    next();
  };

  public validateLevelField = async (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;

    if (level === undefined || level === null) {
      return res.status(400).json({ message: messages.getIsRequiredMsgByField('level') });
    }

    if (typeof level !== 'number') {
      return res.status(422).json({ message: messages.getMustBeNumberMsgByField('level') });
    }

    if (level < 1) {
      return res.status(422).json({ message: messages
        .getMustBeGreaterOrEqualToMsgByFieldAndNum('level', 1) });
    }

    next();
  };

  public validatePasswordField = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: messages.getIsRequiredMsgByField('password') });
    }

    if (typeof password !== 'string') {
      return res.status(422).json({ message: messages.getMustBeStringMsgByField('password') });
    }

    if (password.length < 8) {
      return res.status(422).json({ message: messages
        .getMinLengthMsgByFieldAndMinLength('password', 8) });
    }

    next();
  };
}

export default UsersFieldsValidation;