import React from "react";
import "./globals.css";

import HeaderSidebarContainer from "@/components/global/HeaderSidebarContainer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <HeaderSidebarContainer />
        {children}
      </body>
    </html>
  );
}
