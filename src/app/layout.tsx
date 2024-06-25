import React from "react";
import "./globals.css";

import HeaderSidebarContainer from "@/components/global/HeaderSidebarContainer";

import { notoSansKR } from "@/assets/fonts/notoSansKR";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${notoSansKR.style}`}>
        <HeaderSidebarContainer />
        {children}
      </body>
    </html>
  );
}
