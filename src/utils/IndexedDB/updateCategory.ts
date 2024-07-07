// getDB를 호출하여 열어둔 db를 가져옴.
// 카테고리를 수정하기 위해 트랜잭션을 readwrite로 시작하고, DB 내의 CategoryList Object Store를 염.
// Property로 전달받은 category를 CategoryList Object Store에 put 함으로써 수정하고 트랜잭션을 종료함.

import { Category } from "@/types/categoryType";
import { getDB } from "./getDB";
import { STORE_NAME } from "@/constants/IndexedDBStore";

// 이때 전달받은 category는 단 하나의 category 객체임. 이를 그냥 put 하는 것만으로 CategoryList Object Store에서 수정됨.
export async function updateCategory(category: Category) {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);

  await store.put(category);
  await tx.done;
}
