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
    const q = query(collectionGroup(dbService, transaction));
    console.log(q);
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
  const messageRef = collection(dbService, 'ChatRooms');
  const addMessage = async (messages) => {
    console.log(messages);
    try {
      const createdAt = timeStamp.fromDate(new Date());
      const lastTime = timeStamp.fromDate(new Date());

      await addDoc(collection(messageRef, 'Chat', transaction), {
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

export const useGetChatRooms = () => {

  const [chatRooms, setChatRooms] = useState([]);
  useEffect(() => {
    const q = query(
      collectionGroup(dbService, 'message'),
      orderBy('friendName'),
      orderBy('lastTime'),
      orderBy('message')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(snapshot);
      let result = [];
      
      snapshot.docs.forEach((doc) => {
        result.push({id: doc.id, ...doc.data() });
      });
      setChatRooms(result);

      return unsubscribe;
    });
  }, [collection]);
  console.log(chatRooms);

  return { chatRooms };
};

export const useGetGroupMessages = (transaction) => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const q = query(collection(dbService, 'GroupRooms/Group/' + transaction));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(snapshot);
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(result);
    });

    return unsubscribe;
  }, [collection]);

  return { documents };
};

export const useGroupMessage = (transaction) => {
  const messageRef = collection(dbService, 'GroupRooms');
  const addGroupMessage = async (messages) => {
    try {
      const createdAt = timeStamp.fromDate(new Date());
      const lastTime = timeStamp.fromDate(new Date());
      await addDoc(collection(messageRef, transaction), {
        ...messages,
        createdAt,
        lastTime,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return { addGroupMessage };
};
