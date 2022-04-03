import { Users } from '@prisma/client';
import jwt from 'jsonwebtoken';

const { SECRET } = process.env;

const createToken = (user: Users) => {
  if (SECRET) {
    const tokenCreated = jwt.sign(user, SECRET);
    return tokenCreated;
  }
};

const validateToken = (token: string) => {
  if (SECRET) {
    try {
      const decodedToken = jwt.verify(token, SECRET);
      return decodedToken;
    } catch (error) {
      return null;
    }
  }
};

export {
  createToken,
  validateToken,
};
