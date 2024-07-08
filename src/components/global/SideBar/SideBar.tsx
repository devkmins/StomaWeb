"use client";

import React from "react";
//import SideBarItem from "./SideBarItem";
import { useSideBarStore } from "@/state/stores/sideBarStore";
import SideBarSubItem from "./SideBarSubItem";
import IArrowDown from "@/assets/icons/IArrowDown";
import { notoSansKR } from "@/assets/fonts/notoSansKR";
import IArrowUp from "@/assets/icons/IArrowUp";
import Link from "next/link";

export default function SideBar() {
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

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const itemName = event.currentTarget.innerText;

    if (itemName === "시장") {
      isSideBarMarketsOpenToggle(isSideBarMarketsOpen);
    } else if (itemName === "투자 • 경제 공부") {
      isSideBarFinanceEducationOpenToggle(isSideBarFinanceEducationOpen);
    } else if (itemName === "더 보기") {
      isSideBarMoreOpenToggle(isSideBarMoreOpen);
    }
  };

  return (
    <div className="mt-5 border-t border-b boder-solid boder-black">
      <ul>
        <Link href="/">
          <li
            className={`px-5 py-3 border-y border-l flex justify-between items-center text-slate-600 ${notoSansKR.style}`}>
            <span>홈</span>
          </li>
        </Link>
        <Link href="/watchlist">
          <li
            className={`px-5 py-3 border-y border-l flex justify-between items-center text-slate-600 ${notoSansKR.style}`}>
            <span>관심 종목</span>
          </li>
        </Link>
        <div>
          <li
            className={`px-5 py-3 border-y border-l flex justify-between items-center text-slate-600 cursor-pointer ${notoSansKR.style}`}
            onClick={handleClick}>
            <span>시장</span>
            {isSideBarMarketsOpen ? <IArrowUp /> : <IArrowDown />}
          </li>
        </div>
        {isSideBarMarketsOpen && <SideBarSubItem itemName="시장" />}
        <div>
          <li
            className={`px-5 py-3 border-y border-l flex justify-between items-center text-slate-600 cursor-pointer ${notoSansKR.style}`}
            onClick={handleClick}>
            <span>투자 • 경제 공부</span>
            {isSideBarFinanceEducationOpen ? <IArrowUp /> : <IArrowDown />}
          </li>
        </div>
        {isSideBarFinanceEducationOpen && (
          <SideBarSubItem itemName="투자 • 경제 공부" />
        )}
        <div>
          <li
            className={`px-5 py-3 border-y border-l flex justify-between items-center text-slate-600 cursor-pointer ${notoSansKR.style}`}
            onClick={handleClick}>
            <span>더 보기</span>
            {isSideBarMoreOpen ? <IArrowUp /> : <IArrowDown />}
          </li>
        </div>
        {isSideBarMoreOpen && <SideBarSubItem itemName="더 보기" />}
      </ul>
    </div>
  );
}
