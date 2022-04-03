import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import StatusCodes from 'http-status-codes';

import { ILogin } from '../interface/types';

export default (request: Request, response: Response, next: NextFunction) => {
  const { email, password }: ILogin = request.body;

  const bodyIsValid = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = bodyIsValid.validate({ email, password });
  if (error?.isJoi) {
    return response.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }

  next();
};
