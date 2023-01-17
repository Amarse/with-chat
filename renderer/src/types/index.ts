export interface IUser {
  uid?: string;
  email: string;
  password: string;
  disPlayName?: string;
}


export interface FirebaseUser {
  uid: string;
  email: string;
  disPlayName: string;
}
