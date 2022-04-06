import { NextFunction, Request, Response } from 'express';
import statusCodes from 'http-status-codes';

import { validateToken } from '../service/jwt';

export default (request: Request, response: Response, next: NextFunction) => {
  const { token } = request.headers;

  if (!token) {
    return response.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
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
