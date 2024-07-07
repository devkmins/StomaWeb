import { Category } from "@/types/categoryType";
import { getDB } from "./getDB";
import { STORE_NAME } from "@/constants/IndexedDBStore";

export async function getCategoryById(
  categoryId: string
): Promise<Category | undefined> {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  const category = await store.get(categoryId);
  return category;
}
