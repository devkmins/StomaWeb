import { ubuntu } from "@/assets/fonts/ubuntu";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-fit flex justify-between border-t-2 p-10 bg-slate-100">
      <div>
        <div className="flex items-center">
          <Image width={50} height={50} src="/logo/logoCircle.png" alt="Logo" />
          <div className="ml-3">
            <span className={`${ubuntu.className} text-2xl`}>StomaWeb</span>
          </div>
        </div>
      </div>
      <div>
        <div className="pb-3">
          <span className="font-bold text-gray-700">시장</span>
        </div>
        <div className="flex flex-col space-y-3 text-sm text-gray-600">
          <Link href="/markets/news">뉴스</Link>
          <Link href="/markets/stocks">주식</Link>
          <Link href="/markets/indices">지수</Link>
          <Link href="/markets/currencies">외환</Link>
          <Link href="/markets/futures">선물</Link>
          <Link href="/markets/funds-etfs">펀드 및 ETF</Link>
          <Link href="/markets/cryptocurrencies">암호화폐</Link>
          <Link href="/markets/ipo-calendar">IPO 일정</Link>
        </div>
      </div>
      <div>
        <div className="pb-3">
          <span className="font-bold text-gray-700">투자 • 경제 공부</span>
        </div>
        <div className="flex flex-col space-y-3 text-sm text-gray-600">
          <Link href="/finance-education/lectures">강의</Link>
          <Link href="/finance-education/books">도서</Link>
          <Link href="/finance-education/services">금융 관련 서비스</Link>
          <Link href="/finance-education/banks-reports">
            전 세계 은행들의 보고서
          </Link>
        </div>
      </div>
      <div>
        <div className="pb-3">
          <span className="font-bold text-gray-700">더 보기</span>
        </div>
        <div className="flex flex-col space-y-3 text-sm text-gray-600">
          <Link href="/more/about-us">이 웹사이트에 대하여</Link>
          <Link href="/more/support">문의하기</Link>
          <Link href="/more/term-of-use">이용약관</Link>
          <Link href="/more/privacy-policy">개인정보 정책</Link>
          <Link href="/more/language-change">언어 변경</Link>
        </div>
      </div>
    </footer>
  );
}
