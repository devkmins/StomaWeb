"use client";

import useSetCategories from "@/hooks/useSetCategories";
import { usePushCategoryPage } from "@/hooks/usePushCategoryPage";

export default function Watchlist() {
  const { categories } = useSetCategories();

  usePushCategoryPage();

  return (
    <div>
      {categories.length > 0 ? (
        <div className="h-screen flex flex-col justify-center items-center pb-36">
          <span>카테고리를 선택하여 추가한 관심 종목을 확인하세요!</span>
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center pb-20">
          <span>
            설정 아이콘을 클릭하여 카테고리를 생성하고 관심 종목을 추가하세요!
          </span>
        </div>
      )}
    </div>
  );
}
