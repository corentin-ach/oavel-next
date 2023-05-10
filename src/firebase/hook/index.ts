import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../config';

export const useGetFirestore = (coll: string) => {
  const [data, setData] = useState<any>([]);
  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, coll));
    onSnapshot(q, (querySnapshot) => {
      setData(querySnapshot.docs.map((d) => ({ ...d.data() })));
    });
  }, []);
  return data;
};
