import { useEffect, useState } from "react";
import { Category } from "@/types/categoryType";
import { getCategories } from "@/utils/IndexedDB/getCategories";

export default function useSetCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getCategories();
      setCategories(categories);
    }
    fetchCategories();
  }, [categories]);

  return { categories, setCategories };
}
