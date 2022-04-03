import { Router } from 'express';

import loginController from '../controllers/login.controller';
import validateLogin from '../middlewares/validateLogin';

const routes = Router();

routes.post('/login', validateLogin, loginController.login);

export default routes;
