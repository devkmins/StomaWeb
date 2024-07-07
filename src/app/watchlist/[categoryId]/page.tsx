"use client";

import { useWatchListCategoryIdStore } from "@/state/stores/watchListCategoryIdStore";
import { Category } from "@/types/categoryType";
import { getCategoryById } from "@/utils/IndexedDB/getCategoryById";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { categoryId } = useWatchListCategoryIdStore();
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      if (categoryId) {
        try {
          const result = await getCategoryById(categoryId);
          setCategory(result as any);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, [categoryId]);

  return (
    <div className="mt-10">
      <span>{categoryId}</span>
      {/*category && category.interests.map((interest) => (
        <div>{interest}</div>
      ))*/}
    </div>
  );
}
