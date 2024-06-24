import React from "react";
import Header from "@/components/global/Header/Header";
import SideBar from "@/components/global/SideBar/SideBar";

export default function HeaderSidebarContainer() {
  return (
    <div className="w-1/4 h-screen fixed p-1 border-r-2 boder-solid boder-black">
      <Header />
      <SideBar />
    </div>
  );
}
