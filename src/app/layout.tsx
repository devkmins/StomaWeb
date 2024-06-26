import React from "react";
import "./globals.css";

import HeaderSidebarContainer from "@/components/global/HeaderSidebarContainer/HeaderSidebarContainer";
import ScrollToTopButton from "@/components/global/ScrollToTopButton/ScrollToTopButton";
import Footer from "@/components/global/Footer/Footer";

import { notoSansKR } from "@/assets/fonts/notoSansKR";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${notoSansKR.style} flex h-screen relative`}>
        <div className="w-[305px] h-full">
          <HeaderSidebarContainer />
        </div>
        <div className="flex-1 flex flex-col min-h-screen">
          <div>{children}</div>
          <ScrollToTopButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
