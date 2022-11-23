import { Request, Response, NextFunction } from 'express';
import * as messages from '../../responses/messages';

class FieldsValidation {
  validateNameField = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: messages.getIsRequiredMsgByField('name') });
    }

    if (typeof name !== 'string') {
      return res.status(422).json({ message: messages.getMustBeStringMsgByField('name') });
    }

    if (name.length < 3) {
      return res.status(422).json({ message: messages
        .getMinLengthMsgByFieldAndMinLength('name', 3) });
    }

    next();
  };

  validateAmountField = async (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body;
    if (!amount) {
      return res.status(400).json({ message: messages.getIsRequiredMsgByField('amount') });
    }

    if (typeof amount !== 'string') {
      return res.status(422).json({ message: messages.getMustBeStringMsgByField('amount') });
    }

    if (amount.length < 3) {
      return res.status(422).json({ message: messages
        .getMinLengthMsgByFieldAndMinLength('amount', 3) });
    }

    next();
  };
}

export default FieldsValidation;