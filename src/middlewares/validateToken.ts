import { NextFunction, Request, Response } from 'express';
import statusCodes from 'http-status-codes';

import Joi from 'joi';
import { validateToken } from '../service/jwt';

export default (request: Request, response: Response, next: NextFunction) => {
  const { token } = request.headers;

  const joiValidation = Joi.string().required();

  const { error } = joiValidation.validate(token);

  if (error?.isJoi) {
    return response.status(statusCodes.UNAUTHORIZED).json({ message: error.message });
  }

  if (token && typeof token === 'string') {
    const tokenIsValid = validateToken(token);
    if (!tokenIsValid) {
      return response
        .status(statusCodes.UNAUTHORIZED)
        .json({ message: 'Expired token or invalid token' });
    }
  }

  next();
};
