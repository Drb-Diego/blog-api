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

const getAll = async () => {
  const allUsers = await connection.users.findMany();
  return allUsers;
};

const getById = async (id: string) => {
  const userFinded = await connection.users.findFirst({
    where: { id },
  });

  return userFinded;
};

export default {
  createUser,
  getAll,
  getById,
};
