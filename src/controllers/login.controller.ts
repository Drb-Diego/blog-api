import { Request, Response } from 'express';
import statusCodes from 'http-status-codes';
import { ILogin } from '../interface/types';

import loginService from '../service/login.service';

const login = async (request: Request, response: Response) => {
  const { email, password }: ILogin = request.body;

  const userFinded = await loginService.login({ email, password });

  if (userFinded) {
    return response.status(statusCodes.OK).json({ token: userFinded });
  }

  return response.status(statusCodes.NOT_FOUND).json({ message: 'user dosent exists' });
};

export default {
  login,
};
