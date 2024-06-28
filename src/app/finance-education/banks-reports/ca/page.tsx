import ICanadaSquare from "@/assets/icons/flags/square/ICanadaSquare";
import BanksReportsMainBox from "@/components/banks-reports/BanksReportsMainBox";
import Image from "next/image";

export default function CanadaBanksReports() {
  return (
    <div className="mt-10 grid grid-cols-4 gap-20 flex items-center">
      <a
        href={"https://www.bank-banque-canada.ca/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="캐나다 은행">
          <ICanadaSquare />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.rbcroyalbank.com/personal.html"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="캐나다 왕립은행">
          <Image
            src="/logo/country/ca/rbc.png"
            alt="캐나다 왕립은행 로고"
            width="160"
            height="120"
            className="object-contain"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.td.com/ca/en/personal-banking"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="TD 캐나다 트러스트">
          <Image
            src="/logo/country/ca/td-canada-trust.webp"
            alt="TD 캐나다 트러스트 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.scotiabank.com/ca/en/personal.html"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="스코샤 은행">
          <Image
            src="/logo/country/ca/scotiabank.png"
            alt="스코샤 은행 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
    </div>
  );
}
