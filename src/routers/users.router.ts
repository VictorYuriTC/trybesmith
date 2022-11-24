import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import UsersFieldsValidation from '../middlewares/users/UsersFieldsValidation';

const fieldsValidation = new UsersFieldsValidation();

const usersController = new UsersController();

const router = Router();

router.post(
  '/',
  fieldsValidation.validateUsernameField,
  fieldsValidation.validateClasseField,
  fieldsValidation.validateLevelField,
  fieldsValidation.validatePasswordField,
  usersController.addNewUser,
);

export default router;