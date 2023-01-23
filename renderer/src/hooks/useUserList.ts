import {
  addDoc,
  orderBy,
  query,
  getDocs,
  onSnapshot,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { dbService, timeStamp, auth, collection } from 'Fbase.js';
import { useAuth } from 'context/user.context';

export const useCollection = (transaction: any) => {
  const { currentUser } = useAuth();
  const [list, setlist] = useState([]);

  useEffect(() => {
    const q = query(collection(dbService, transaction), orderBy('displayName'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const item = [];
      querySnapshot.docs.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setlist(item);
    });
    return unsubscribe;
  }, [collection]);

  return { list };
};
