import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useWatchListCategoryNameStore } from "@/state/stores/watchListCategoryNameStore";

export const usePushCategoryPage = () => {
  const router = useRouter();
  const { categoryName } = useWatchListCategoryNameStore();

  useEffect(() => {
    if (categoryName === "/") {
      return;
    } else if (categoryName.includes("/watchlist")) {
      router.push(`/watchlist/${categoryName}`);
    }
  }, [categoryName, router]);
};
