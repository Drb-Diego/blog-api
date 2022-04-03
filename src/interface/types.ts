interface IUser {
  name: string;
  email: string;
  password: string;
  image: string;
}

interface ILogin {
  email: string;
  password: string;
}

export {
  IUser,
  ILogin,
};
