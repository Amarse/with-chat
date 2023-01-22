import {
  orderBy,
  query,
  addDoc,
  onSnapshot,
  collectionGroup,
  where,
  getDocs,
  getDoc,
  doc,
  QuerySnapshot,
  getDocFromCache,
} from 'firebase/firestore';
import 'firebase/firestore';

import { useCallback, useEffect, useState } from 'react';
import { dbService, timeStamp, db, collection } from 'Fbase.js';
import { useRef } from 'react';
import { useCollection } from './useUserList';
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

export const useGetMessages = (transaction) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const q = query(collection(dbService, transaction));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(result);
    });

    return unsubscribe;
  }, [collection]);

  console.log(documents);

  return { documents };
};

export const useMessage = (transaction) => {
  const messageRef = collection(dbService, transaction);
  const addMessage = async (messages) => {
    try {
      const createdAt = timeStamp.fromDate(new Date());
      const lastTime = timeStamp.fromDate(new Date());

      await addDoc(messageRef, {
        ...messages,
        createdAt,
        lastTime,
      });
      console.log('메시지', messages);
    } catch (err) {
      console.log(err);
    }
  };

  return { addMessage };
};

export const useGetChatRooms = async () => {
  const [chatRooms, setChatRooms] = useState([]);
  const { list } = useCollection('users');

  useEffect(() => {
    list.map((user) => {
      const q = query(
        collection(dbService, `messages-${user.id}`),
        orderBy('lastTime')
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          console.log('ddd', doc);
          result.push({ ...doc.data(), id: doc.id });
        });
        console.log(result);
        setChatRooms(result);
      });
      return unsubscribe;
    });
  }, [collection]);

  return { chatRooms };
};
