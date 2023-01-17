import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from 'Fbase.js';

export const useCollection = (transaction, myQuery) => {
  const [userList, setUserList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(
        collection(db, transaction),
        // where(),
        orderBy('user', 'desc')
      );
    }
    const unsubscribe = onSnapshot(
      myQuery ? q : collection(db, transaction),
      (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        setUserList(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    return unsubscribe;
  }, [collection]);

  return { userList, error };
};
