import ISouthKoreaSquare from "@/assets/icons/flags/square/ISouthKoreaSquare";
import BanksReportsMainBox from "@/components/banks-reports/BanksReportsMainBox";
import Image from "next/image";

export default function SouthKoreaBanksReports() {
  return (
    <div className="mt-10 grid grid-cols-4 gap-20 flex items-center">
      <a
        href={"https://www.bok.or.kr/portal/main/main.do"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="한국은행">
          <ISouthKoreaSquare />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.kbfg.com/kbresearch/index.do"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="KB경영연구소">
          <Image
            src="/logo/country/kr/kb.webp"
            alt="KB경영연구소 로고"
            width="160"
            height="120"
            className="object-contain"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.wfri.re.kr/ko/web/main.php"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="우리금융경영연구소">
          <Image
            src="/logo/country/kr/wfri.webp"
            alt="우리금융경영연구소 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://eiec.kdi.re.kr/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="KDI 경제정보센터">
          <Image
            src="/logo/country/kr/kdi.webp"
            alt="KDI 경제정보센터 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
    </div>
  );
}
