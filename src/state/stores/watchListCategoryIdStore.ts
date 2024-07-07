import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface WatchListCategoryIdStore {
  categoryId: string;
  setCategoryId: (name: string) => void;
}

export const useWatchListCategoryIdStore = create(
  persist<WatchListCategoryIdStore>(
    (set, get) => ({
      categoryId: "",
      setCategoryId: (id) => {
        set({ categoryId: id });
        if (id === "") {
          localStorage.removeItem("watchlist-category-id-storage");
        }
      },
    }),
    {
      name: "watchlist-category-id-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
