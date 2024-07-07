"use client";

import IArrowDown from "@/assets/icons/IArrowDown";
import IClose from "@/assets/icons/IClose";
import useSetCategories from "@/hooks/useSetCategories";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function InterestsMenu() {
  const router = useRouter();
  const { categories } = useSetCategories();

  const handleClick = () => {
    router.push("/watchlist");
  };

  return (
    <div className="w-1/4 h-full absolute top-0 right-0 border-l-2 bg-white">
      <div className="flex justify-between items-center py-10 px-5 border-b-2">
        <span className="text-xl font-semibold">추가 및 편집</span>
        <button className="w-8" onClick={handleClick}>
          <IClose />
        </button>
      </div>
      <div className="flex border-b-2">
        <div className="w-1/2">
          <Link href="/watchlist/settings/category">
            <div className="flex justify-center py-2 border-r text-gray-700">
              카테고리 메뉴
            </div>
          </Link>
        </div>
        <div className="w-1/2 bg-gray-100">
          <Link href="/watchlist/settings/interests">
            <div className="flex justify-center py-2 border-l text-gray-700">
              관심 종목 메뉴
            </div>
          </Link>
        </div>
      </div>
      <ul className="flex flex-col items-center">
        {categories.map((category) => (
          <li
            key={category.id}
            className="w-full py-2 px-4 border-b flex items-center cursor-pointer">
            <div className="flex-1">{category.name}</div>
            <IArrowDown />
          </li>
        ))}
      </ul>
    </div>
  );
}
