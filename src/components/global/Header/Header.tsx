import IMoney from "@/assets/icons/IMoney";
import ISearch from "@/assets/icons/ISearch";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ubuntu } from "@/assets/fonts/ubuntu";
import { notoSansKR } from "@/assets/fonts/notoSansKR";

export default function Header() {
  return (
    <header>
      <div className="my-5 flex justify-center">
        <Link href="/">
          <Image width={50} height={50} src="/logo/logoCircle.png" alt="Logo" />
        </Link>
        <Link href="/" className="ml-2.5 flex items-center">
          <span className={`${ubuntu.className} text-2xl`}>StomaWeb</span>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-11/12 border rounded-md flex justify-between items-center">
          <form className="w-11/12">
            <input
              className="p-2 w-full"
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
        <a
          href={"https://buymeacoffee.com/stomaweb"}
          target="_blank"
          rel="noopener noreferrer">
          <IMoney />
        </a>
        <div className="ml-1">
          <a
            href={"https://buymeacoffee.com/stomaweb"}
            target="_blank"
            rel="noopener noreferrer">
            <span
              className={`${notoSansKR.style} font-semibold text-[14px] hover:text-gray-500`}>
              응원하기!
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
