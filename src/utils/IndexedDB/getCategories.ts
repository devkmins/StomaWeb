// getDB를 호출하여 열어둔 db를 가져옴.
// 카테고리 목록을 가져오기 위해 트랜잭션을 readonly로 시작하고, DB 내의 CategoryList Object Store를 염.
// getAll을 사용하여 CategoryList Object Store 내의 모든 키-값을 가져옴.

import { Category } from "@/types/categoryType";
import { getDB } from "./getDB";
import { STORE_NAME } from "@/constants/IndexedDBStore";

// 가져온 모든 키-값 객체들이 저장된 배열을 createdAt에 따라, 즉 생성된 시간에 따라 오름차순으로 정렬하여 반환함.
export async function getCategories(): Promise<Category[]> {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  const categories = await store.getAll();
  return categories.sort((a, b) => a.order - b.order);
}
