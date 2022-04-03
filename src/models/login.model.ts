import { ILogin } from '../interface/types';
import connection from '../database/connection';

const login = async ({ email, password }: ILogin) => {
  const userExist = await connection.users.findFirst({
    where: { email, password },
  });

  return userExist;
};

export default {
  login,
};
