import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BanksReportsStore {
  countryName: string;
  setCountryName: (name: string) => void;
}

export const useBanksReportsStore = create(
  persist<BanksReportsStore>(
    (set) => ({
      countryName: "전체",
      setCountryName: (name) => set({ countryName: name }),
    }),
    {
      name: "banks-reports-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
