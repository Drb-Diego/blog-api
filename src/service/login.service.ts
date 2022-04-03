import { ILogin } from '../interface/types';
import loginModel from '../models/login.model';

import { createToken } from './jwt';

const login = async ({ email, password }: ILogin) => {
  const userFinded = await loginModel.login({ email, password });

  if (userFinded) {
    const token = createToken(userFinded);
    return token;
  }
};

export default {
  login,
};
