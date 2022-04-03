import { IUser } from '../interface/types';

import userModel from '../models/user.model';
import { createToken } from './jwt';

const createUser = async (user: IUser) => {
  const userCreated = await userModel.createUser(user);
  const token = createToken(userCreated);

  return token;
};

export default {
  createUser,
};
