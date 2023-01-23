export interface IUser {
  uid?: string;
  email: string;
  password: string;
  disPlayName?: string;
}

export interface UserData {
  id?: string;
  displayName?: string;
  email?: string;
}

export interface ChannelPropsType {
  id?: string | string[];
  displayName?: string | string[] ;
  currentUser?: UserData;
  friendName?: string | string[];
}
