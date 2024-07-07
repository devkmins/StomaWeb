import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface WatchListCategoryNameStore {
  categoryName: string;
  setCategoryName: (name: string) => void;
}

export const useWatchListCategoryNameStore = create(
  persist<WatchListCategoryNameStore>(
    (set, get) => ({
      categoryName: "",
      setCategoryName: (name) => {
        set({ categoryName: name });
        if (name === "") {
          localStorage.removeItem("watchlist-category-name-storage");
        }
      },
    }),
    {
      name: "watchlist-category-name-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
