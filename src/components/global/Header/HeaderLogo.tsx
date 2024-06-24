import Image from "next/image";
import Link from "next/link";

import { ubuntu } from "@/assets/fonts/ubuntu";

export default function HeaderLogo() {
  return (
    <div className="my-5 flex justify-center">
      <Link href="/">
        <Image width={50} height={50} src="/logo/logoCircle.png" alt="Logo" />
      </Link>
      <Link href="/" className="ml-2.5 flex items-center">
        <span className={`${ubuntu.className} text-2xl`}>StomaWeb</span>
      </Link>
    </div>
  );
}
