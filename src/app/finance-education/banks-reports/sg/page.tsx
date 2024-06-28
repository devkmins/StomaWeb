import ISingaporeSquare from "@/assets/icons/flags/square/ISingaporeSquare";
import BanksReportsMainBox from "@/components/banks-reports/BanksReportsMainBox";
import Image from "next/image";

export default function SingaporeBanksReports() {
  return (
    <div className="mt-10 grid grid-cols-4 gap-20 flex items-center">
      <a
        href={"https://www.mas.gov.sg/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="싱가포르 통화 관리청">
          <ISingaporeSquare />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.dbs.com/default.page"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="DBS 은행">
          <Image
            src="/logo/country/sg/dbs-bank.jpg"
            alt="DBS 은행 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.ocbc.com/group/gateway?"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="화교은행">
          <Image
            src="/logo/country/sg/ocbc-bank.png"
            alt="화교은행 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.sc.com/en/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="스탠다드 차타드 은행">
          <Image
            src="/logo/country/sg/standard-chartered-bank.png"
            alt="스탠다드 차타드 은행 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
    </div>
  );
}
