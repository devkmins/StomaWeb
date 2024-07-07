"use client";

import React from "react";
import SideBarItem from "./SideBarItem";
import SideBarDropdownItem from "./SideBarDropdownItem";
import { useSideBarStore } from "@/state/stores/sideBarStore";
import SideBarSubItem from "./SideBarSubItem";

export default function SideBar() {
  const isSideBarMarketsOpen = useSideBarStore(
    (state) => state.isSideBarMarketsOpen
  );
  const isSideBarFinanceEducationOpen = useSideBarStore(
    (state) => state.isSideBarFinanceEducationOpen
  );
  const isSideBarMoreOpen = useSideBarStore((state) => state.isSideBarMoreOpen);

  return (
    <div className="mt-5 border-t border-b boder-solid boder-black">
      <ul>
        <SideBarItem>홈</SideBarItem>
        <SideBarItem>관심 종목</SideBarItem>
        <SideBarDropdownItem>시장</SideBarDropdownItem>
        {isSideBarMarketsOpen && <SideBarSubItem itemName="시장" />}
        <SideBarDropdownItem>투자 • 경제 공부</SideBarDropdownItem>
        {isSideBarFinanceEducationOpen && (
          <SideBarSubItem itemName="투자 • 경제 공부" />
        )}
        <SideBarDropdownItem>더 보기</SideBarDropdownItem>
        {isSideBarMoreOpen && <SideBarSubItem itemName="더 보기" />}
      </ul>
    </div>
  );
}
