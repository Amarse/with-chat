import {
  orderBy,
  query,
  addDoc,
  onSnapshot,
  limit,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { dbService, timeStamp, auth, collection } from 'Fbase.js';
import { useRef } from 'react';
export const useChannel = (transaction: any) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    onSnapshot(transaction, (querySnapshot) => {
      const item = [];
      querySnapshot.docs.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setDocs(item);
    });
  }, [collection]);

  return { docs };
  // 데이터 조회
};

export const useGetMessages = (transaction, myQuery) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  console.log(documents);

  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(
        collection(dbService, transaction),
        // where({...myQuery}),
        orderBy('createAt'),
        limit(1000)
      );
    }
    const unsubscribe = onSnapshot(
      myQuery ? q : collection(dbService, transaction),
      (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          console.log('ff', doc.id);
          result.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    return unsubscribe;
  }, [collection]);

  console.log(documents);

  return { documents, error };
};

export const useMessage = (transaction) => {
  const addM = collection(dbService, transaction);
  const addMessage = async (messages) => {
    try {
      // const id = messages.user.id;
      const createdAt = timeStamp.fromDate(new Date());
      console.log('id', messages);
      await addDoc(addM, { ...messages, createdAt });
    } catch (err) {
      console.log(err);
    }
  };

  return { addMessage };
};
