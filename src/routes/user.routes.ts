import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateUsers from '../middlewares/validateUsers';

const routes = Router();

routes.post('/user', validateUsers, userController.createUser);

export default routes;
