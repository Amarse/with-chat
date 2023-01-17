export interface IUser {
  uid: string;
  email: string;
  password: string;
}

export interface IUserin {
  user: IUser;
  loading: boolean;
}
