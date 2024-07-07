import { notoSansKR } from "@/assets/fonts/notoSansKR";
import IArrowDown from "@/assets/icons/IArrowDown";
import { useSideBarStore } from "@/state/stores/sideBarStore";

interface SideBarItemProps {
  children: React.ReactNode;
}

export default function SideBarDropdownItem({ children }: SideBarItemProps) {
  const isSideBarMarketsOpen = useSideBarStore(
    (state) => state.isSideBarMarketsOpen
  );
  const isSideBarFinanceEducationOpen = useSideBarStore(
    (state) => state.isSideBarFinanceEducationOpen
  );
  const isSideBarMoreOpen = useSideBarStore((state) => state.isSideBarMoreOpen);

  const isSideBarMarketsOpenToggle = useSideBarStore(
    (state) => state.isSideBarMarketsOpenToggle
  );
  const isSideBarFinanceEducationOpenToggle = useSideBarStore(
    (state) => state.isSideBarFinanceEducationOpenToggle
  );
  const isSideBarMoreOpenToggle = useSideBarStore(
    (state) => state.isSideBarMoreOpenToggle
  );

  const handleClick = () => {
    if (children === "시장") {
      isSideBarMarketsOpenToggle(isSideBarMarketsOpen);
    } else if (children === "투자 • 경제 공부") {
      isSideBarFinanceEducationOpenToggle(isSideBarFinanceEducationOpen);
    } else if (children === "더 보기") {
      isSideBarMoreOpenToggle(isSideBarMoreOpen);
    }
  };

  return (
    <div>
      <li
        className={`px-5 py-3 border-y border-l flex justify-between items-center text-slate-600 cursor-pointer ${notoSansKR.style}`}
        onClick={handleClick}>
        <span>{children}</span>
        <IArrowDown />
      </li>
    </div>
  );
}
