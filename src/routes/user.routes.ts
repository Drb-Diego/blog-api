import { Router } from 'express';

import userController from '../controllers/user.controller';
import validateToken from '../middlewares/validateToken';
import validateUsers from '../middlewares/validateUsers';

const routes = Router();

routes.post('/user', validateUsers, userController.createUser);
routes.get('/user', validateToken, userController.getAll);

export default routes;
