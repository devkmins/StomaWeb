import { notoSansKR } from "@/assets/fonts/notoSansKR";
import Link from "next/link";

interface SideBarItemProps {
  children: React.ReactNode;
}

export default function SideBarItem({ children }: SideBarItemProps) {
  const href =
    children === "홈" ? "/" : children === "관심 종목" ? "/watchlist" : "";

  return (
    <Link href={href}>
      <li
        className={`px-5 py-3 border-y border-l flex justify-between items-center text-slate-600 ${notoSansKR.style}`}>
        <span>{children}</span>
      </li>
    </Link>
  );
}
