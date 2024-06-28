"use client";

import { useBanksReportsStore } from "@/state/stores/banksReportsStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function BanksReportsDropDown() {
  const router = useRouter();

  const { countryName, setCountryName } = useBanksReportsStore();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleCountrySelect = (name: string) => {
    setCountryName(name);
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    if (countryName === "/") {
      return;
    } else if (countryName === "대한민국") {
      router.push("/finance-education/banks-reports/kr");
    } else if (countryName === "미국") {
      router.push("/finance-education/banks-reports/us");
    } else if (countryName === "영국") {
      router.push("/finance-education/banks-reports/gb");
    } else if (countryName === "싱가포르") {
      router.push("/finance-education/banks-reports/sg");
    } else if (countryName === "캐나다") {
      router.push("/finance-education/banks-reports/ca");
    } else if (countryName === "호주") {
      router.push("/finance-education/banks-reports/au");
    }
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(countryName);

  return (
    <div className="relative mt-10 pb-10 border-b-2 ">
      <div className="w-fit" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="px-24 py-2 border-2 border-gray-200 rounded-md font-semibold focus:border-gray-400">
          선택: {countryName}
        </button>
        {isDropDownOpen && (
          <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md">
            <div className="py-1">
              <Link
                href="/finance-education/banks-reports"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => handleCountrySelect("전체")}>
                전체
              </Link>
              <Link
                href="/finance-education/banks-reports/kr"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => handleCountrySelect("대한민국")}>
                대한민국
              </Link>
              <Link
                href="/finance-education/banks-reports/us"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => handleCountrySelect("미국")}>
                미국
              </Link>
              <Link
                href="/finance-education/banks-reports/gb"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => handleCountrySelect("영국")}>
                영국
              </Link>
              <Link
                href="/finance-education/banks-reports/sg"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => handleCountrySelect("싱가포르")}>
                싱가포르
              </Link>
              <Link
                href="/finance-education/banks-reports/ca"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => handleCountrySelect("캐나다")}>
                캐나다
              </Link>
              <Link
                href="/finance-education/banks-reports/au"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => handleCountrySelect("호주")}>
                호주
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
