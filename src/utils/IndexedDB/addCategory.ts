import { v4 as uuidv4 } from "uuid";
import { getDB } from "./getDB";
import { STORE_NAME } from "@/constants/IndexedDBStore";

// getDB를 호출하여 열어둔 db를 가져옴.
// uuiv4를 통해 카테고리 id를 생성하고, Date.now를 통해 현재 시간을 생성함.
// db에 저장하기 위해서는 트랜잭션을 이용해야 함.
// 카테고리를 추가하기 위해 트랜잭션을 readwrite로 시작하고, DB 내의 CategoryList Object Store를 염.
// CategoryList Object Store에 비동기적으로 카테고리 id, 카테고리명, 관심 종목 리스트, 생성된 날짜를 저장
// 이후 트랜잭션을 닫음.
export async function addCategory(categoryName: string) {
  const db = await getDB();
  const categoryId = uuidv4();

  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);

  // 현재 가장 큰 order 값을 찾습니다
  const allCategories = await store.getAll();
  const maxOrder = allCategories.reduce(
    (max, cat) => Math.max(max, cat.order || 0),
    0
  );

  const newCategory = {
    id: categoryId,
    name: categoryName,
    interests: [],
    isChecked: false,
    order: maxOrder + 1, // 새 카테고리를 항상 맨 끝에 추가
  };

  await store.add(newCategory);
  await tx.done;

  return newCategory;
}
