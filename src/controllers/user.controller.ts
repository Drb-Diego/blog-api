import { Request, Response } from 'express';
import statusCodes from 'http-status-codes';

import userService from '../service/user.service';
import { IUser } from '../interface/types';

const createUser = async (request: Request, response: Response) => {
  const { name, email, image, password }: IUser = request.body;

  const token = await userService.createUser({ name, email, password, image });

  return response.status(statusCodes.CREATED).json({ token });
};

export default {
  createUser,
};
