import { STORE_NAME } from "@/constants/IndexedDBStore";
import { getDB } from "./getDB";

export async function deleteCategories(categoryIds: string[]): Promise<void> {
  const db = await getDB(); // getDB 함수는 IndexedDB 연결을 반환하는 함수입니다.
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);

  const deletePromises = categoryIds.map((id) => store.delete(id));
  await Promise.all(deletePromises);
  await tx.done;
}
