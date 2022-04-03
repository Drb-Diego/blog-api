import { Users } from '@prisma/client';
import jwt from 'jsonwebtoken';

const { SECRET } = process.env;

const createToken = (token: Users) => {
  if (SECRET) {
    const tokenCreated = jwt.sign(token, SECRET);
    return tokenCreated;
  }
};

export {
  createToken,
};
