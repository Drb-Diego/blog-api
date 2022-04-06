import { Request, Response } from 'express';
import statusCodes from 'http-status-codes';

import userService from '../service/user.service';
import { IUser } from '../interface/types';

const createUser = async (request: Request, response: Response) => {
  const { name, email, image, password }: IUser = request.body;

  const token = await userService.createUser({ name, email, password, image });

  return response.status(statusCodes.CREATED).json({ token });
};

const getAll = async (_request: Request, response: Response) => {
  const allUsers = await userService.getAll();

  return response.status(statusCodes.OK).json(allUsers);
};

const getById = async (request: Request, response: Response) => {
  const { id } = request.params;

  const userFinded = await userService.getById(id);

  if (userFinded) return response.status(statusCodes.OK).json(userFinded);

  return response.status(statusCodes.NOT_FOUND).json({ message: 'User not found' });
};

export default {
  createUser,
  getAll,
  getById,
};
