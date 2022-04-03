import { NextFunction, Request, Response } from 'express';
import statusCodes from 'http-status-codes';

import Joi from 'joi';
import { IUser } from '../interface/types';

export default (request: Request, response: Response, next: NextFunction) => {
  const { name, email, image, password }: IUser = request.body;

  const validateUser = Joi.object({
    name: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4),
    image: Joi.string().required(),
  });

  const { error } = validateUser.validate({ name, email, image, password });
  if (error?.isJoi) {
    return response.status(statusCodes.BAD_REQUEST).json({ messagage: error.message });
  }

  next();
};
