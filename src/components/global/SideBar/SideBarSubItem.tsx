import Link from "next/link";

interface SideBarSubItemProp {
  itemName: string;
}

export default function SideBarSubItem({ itemName }: SideBarSubItemProp) {
  const marketsMenuItems = [
    { href: "/markets", label: "메인" },
    { href: "/markets/news", label: "뉴스" },
    { href: "/markets/stocks", label: "주식" },
    { href: "/markets/cryptocurrencies", label: "암호화폐" },
  ];

  const financeEducationMenuItems = [
    { href: "/finance-education/lectures", label: "강의" },
    { href: "/finance-education/books", label: "도서" },
    { href: "/finance-education/services", label: "금융 관련 서비스" },
    {
      href: "/finance-education/banks-reports",
      label: "전 세계 은행들의 보고서",
    },
  ];

  const moreMenuItems = [
    { href: "/more/about-us", label: "이 웹사이트에 대하여" },
    { href: "/more/support", label: "문의하기" },
    { href: "/more/terms-of-use", label: "이용약관" },
    { href: "/more/privacy-policy", label: "개인정보 정책" },
    { href: "/more/language-change", label: "언어 변경" },
  ];

  return (
    <ul>
      {itemName === "시장" &&
        marketsMenuItems.map((item, index) => (
          <ul key={index}>
            <li
              key={index}
              className="pl-10 py-3 text-sm text-slate-500 hover:text-slate-800">
              <Link href={item.href}>{item.label}</Link>
            </li>
          </ul>
        ))}

      {itemName === "투자 • 경제 공부" &&
        financeEducationMenuItems.map((item, index) => (
          <ul key={index}>
            <li
              key={index}
              className="pl-10 py-3 text-sm text-slate-500 hover:text-slate-800">
              <Link href={item.href}>{item.label}</Link>
            </li>
          </ul>
        ))}

      {itemName === "더 보기" &&
        moreMenuItems.map((item, index) => (
          <ul key={index}>
            <li
              key={index}
              className="pl-10 py-3 text-sm text-slate-500 hover:text-slate-800">
              <Link href={item.href}>{item.label}</Link>
            </li>
          </ul>
        ))}
    </ul>
  );
}
