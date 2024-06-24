"use client";

import Image from "next/image";
import Link from "next/link";

import { ubuntu } from "@/assets/fonts/ubuntu";
import { usePathname } from "next/navigation";

import { scrollToTop } from "@/utils/scrollToTop";

export default function HeaderLogo() {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/" ? (
        <div className="cursor-pointer my-5 flex justify-center">
          <div onClick={scrollToTop}>
            <Image
              width={50}
              height={50}
              src="/logo/logoCircle.png"
              alt="Logo"
            />
          </div>
          <div
            onClick={scrollToTop}
            className="cursor-pointer ml-2.5 flex items-center">
            <span className={`${ubuntu.className} text-2xl`}>StomaWeb</span>
          </div>
        </div>
      ) : (
        <div className="my-5 flex justify-center">
          <Link href="/">
            <Image
              width={50}
              height={50}
              src="/logo/logoCircle.png"
              alt="Logo"
            />
          </Link>
          <Link href="/" className="ml-2.5 flex items-center">
            <span className={`${ubuntu.className} text-2xl`}>StomaWeb</span>
          </Link>
        </div>
      )}
    </div>
  );
}
