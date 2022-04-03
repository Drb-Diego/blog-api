import { IUser } from '../interface/types';
import connection from '../database/connection';

const createUser = async ({ name, email, image, password }: IUser) => {
  const userCreated = await connection.users.create({
    data: {
      name,
      email,
      image,
      password,
    },
  });

  return userCreated;
};

export default {
  createUser,
};
