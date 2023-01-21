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

export const usePrivate = (transaction: any) => {
  const [list, setlist] = useState([]);
  console.log(list)
  useEffect(() => {
    const q = query(collection(dbService, transaction), orderBy('displayName'));

    onSnapshot(q, (querySnapshot) => {
      const item = [];
      querySnapshot.docs.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setlist(item);
    });
  }, [collection]);
  return { list };
};
