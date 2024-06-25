import React from "react";
import "./globals.css";

import HeaderSidebarContainer from "@/components/global/HeaderSidebarContainer/HeaderSidebarContainer";
import ScrollToTopButton from "@/components/global/ScrollToTopButton/ScrollToTopButton";

import { notoSansKR } from "@/assets/fonts/notoSansKR";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${notoSansKR.style} h-screen relative`}>
        <HeaderSidebarContainer />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
