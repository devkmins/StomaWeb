import React from "react";
import Header from "@/components/global/Header/Header";
import SideBar from "@/components/global/SideBar/SideBar";

export default function HeaderSidebarContainer() {
  return (
    <div className="w-[305px] h-screen fixed border-r-2 boder-solid boder-black overflow-scroll">
      <Header />
      <SideBar />
      {/* 광고가 삽입되어야 함. 광고는 fixed */}
    </div>
  );
}
