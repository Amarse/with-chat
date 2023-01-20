import {
  addDoc,
} from 'firebase/firestore';
import { dbService, timeStamp, auth, collection } from 'Fbase.js';

export const useAddUser = (transaction) => {
  const userAdd = collection(dbService, transaction);

  const addUser = async (user) => {
    try {
      const createdAt = timeStamp.fromDate(new Date());
      await addDoc(userAdd, { ...user, createdAt });
    } catch (err) {
      console.log(err);
    }
  };
  return { addUser };
};
