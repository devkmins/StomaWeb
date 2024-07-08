import { create } from "zustand";

interface SideBarStore {
  isSideBarMarketsOpen: boolean;
  isSideBarMarketsOpenToggle: (isSideBarMarketsOpen: boolean) => void;
  isSideBarFinanceEducationOpen: boolean;
  isSideBarFinanceEducationOpenToggle: (
    isSideBarFinanceEducationOpen: boolean
  ) => void;
  isSideBarMoreOpen: boolean;
  isSideBarMoreOpenToggle: (isSideBarMoreOpen: boolean) => void;
}

export const useSideBarStore = create<SideBarStore>((set) => ({
  isSideBarMarketsOpen: false,
  isSideBarMarketsOpenToggle: (isSideBarMarketsOpen) =>
    set({
      isSideBarMarketsOpen: !isSideBarMarketsOpen,
    }),
  isSideBarFinanceEducationOpen: false,
  isSideBarFinanceEducationOpenToggle: (isSideBarFinanceEducationOpen) =>
    set({
      isSideBarFinanceEducationOpen: !isSideBarFinanceEducationOpen,
    }),
  isSideBarMoreOpen: false,
  isSideBarMoreOpenToggle: (isSideBarMoreOpen) =>
    set({
      isSideBarMoreOpen: !isSideBarMoreOpen,
    }),
}));
