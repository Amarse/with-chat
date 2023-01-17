import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db, timeStamp, auth } from 'Fbase.js';
import { useAuth } from '../context/user.context';

export const useFirebaseStore = (transaction) => {
  const { user } = useAuth();
  const [list, setlist] = useState(null);
  const userCollection = collection(db, transaction);

  const addUser = async (user) => {
    try {
      const createdTime = timeStamp.fromDate(new Date());
      await addDoc(userCollection, { ...user, createdTime });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const q = query(collection(db, transaction), orderBy('email', 'desc'));
    getDocs(q).then((querySnapShot) => {
      let list = [];
      querySnapShot.docs.forEach((doc) => {
        list.push({ ...doc.data(), id: user.uid });
      });

      setlist(list);
    });
    return list;
  }, [collection]);

  return { addUser, list };
};
