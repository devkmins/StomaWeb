"use client";

import WatchListDropDown from "@/components/watchlist/WatchListDropDown";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ISetting from "@/assets/icons/ISetting";
import useSetCategories from "@/hooks/useSetCategories";

export default function WatchListLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const pathname = usePathname();
  const showModal = pathname.includes("/settings");
  const { categories } = useSetCategories();

  return (
    <div className="h-screen p-10">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">관심 종목</h1>
          <div className="w-10">
            <Link href="/watchlist/settings/category">
              <ISetting />
            </Link>
          </div>
        </div>
        {categories.length > 0 ? <WatchListDropDown /> : ""}
        {children}
        {showModal && modal}
      </div>
    </div>
  );
}
