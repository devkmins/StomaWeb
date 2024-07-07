import IAustraliaSquare from "@/assets/icons/flags/square/IAustraliaSquare";
import BanksReportsMainBox from "@/components/banks-reports/BanksReportsMainBox";
import Image from "next/image";

export default function AustraliaBanksReports() {
  return (
    <div className="mt-10 grid grid-cols-4 gap-20 flex items-center">
      <a
        href={"https://www.rba.gov.au/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="호주 중앙 은행">
          <IAustraliaSquare />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.commbank.com.au/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="커먼웰스 은행">
          <Image
            src="/logo/country/au/commonwealth-bank.webp"
            alt="커먼웰스 은행 로고"
            width="160"
            height="120"
            className="object-contain"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.westpac.com.au/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="웨스트팩">
          <Image
            src="/logo/country/au/westpac.webp"
            alt="웨스트팩 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.anz.com.au/personal/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="오스트레일리아 뉴질랜드 은행">
          <Image
            src="/logo/country/au/anz.webp"
            alt="오스트레일리아 뉴질랜드 은행 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
    </div>
  );
}
