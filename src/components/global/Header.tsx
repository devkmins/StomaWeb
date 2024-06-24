import IMoney from "@/assets/icons/IMoney";
import ISearch from "@/assets/icons/ISearch";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-5">
      <div className="mb-5 flex justify-center">
        <Link href="/">
          <Image width={50} height={50} src="/logo/logoCircle.png" alt="Logo" />
        </Link>
        <Link href="/" className="ml-2.5 flex items-center">
          <span className="text-xl font-bold">StomaWeb</span>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-11/12 border rounded-md flex justify-between items-center">
          <form className="w-11/12">
            <input
              className="p-2 w-full focus:outline-none"
              name="keyword"
              placeholder="이 웹사이트에서 검색하기"
              type="text"
              alt=""
            />
          </form>
          <button className="pr-0.5">
            <ISearch />
          </button>
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <Link href={"https://buymeacoffee.com/stomaweb"}>
          <IMoney />
        </Link>
        <div className="ml-1">
          <Link href={"https://buymeacoffee.com/stomaweb"}>
            <span className="text-[13px] hover:text-gray-500">
              더 나은 서비스를 개발할 수 있도록 도와주세요!
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}