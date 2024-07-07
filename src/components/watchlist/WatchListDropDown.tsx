"use client";

import { useWatchListCategoryNameStore } from "@/state/stores/watchListCategoryNameStore";
import { useWatchListCategoryIdStore } from "@/state/stores/watchListCategoryIdStore";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import useSetCategories from "@/hooks/useSetCategories";
import { usePushCategoryPage } from "@/hooks/usePushCategoryPage";

export default function WatchListDropDown() {
  const { categoryName, setCategoryName } = useWatchListCategoryNameStore();
  const { categoryId, setCategoryId } = useWatchListCategoryIdStore();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { categories } = useSetCategories();

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropDownOpen(false);
    }
  };

  const handleCountrySelect = (name: string, id: string) => {
    setCategoryName(name);
    setCategoryId(id);
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  usePushCategoryPage();

  return (
    <div className="relative mt-10 border-y-2">
      <div className="w-fit" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="px-24 py-2 border-x-2 border-gray-200 font-semibold">
          선택: {categoryName}
        </button>
        {isDropDownOpen && (
          <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md">
            <div className="py-1">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/watchlist/${category.name}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() =>
                    handleCountrySelect(category.name, category.id)
                  }>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
