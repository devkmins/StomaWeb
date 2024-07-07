// CategoryList라는 이름을 가진 ObjectStore가 없는 경우에는 CategoryList ObjectStore를 생성

import { DB_NAME, STORE_NAME } from "@/constants/IndexedDBStore";
import { IDBPDatabase, openDB } from "idb";

let db: IDBPDatabase | null = null;

// IndexedDB를 사용하려면 우선 DB를 열어야 하므로 일단 DB를 열고 열어둔 DB를 반환함.
export async function getDB(): Promise<IDBPDatabase> {
  if (!db) {
    db = await openDB(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, {
            keyPath: "id",
          });
        }
      },
    });
  }

  return db;
}
