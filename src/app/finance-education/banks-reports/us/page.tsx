import IUnitedStatesSquare from "@/assets/icons/flags/square/IUnitedStatesSquare";
import BanksReportsMainBox from "@/components/banks-reports/BanksReportsMainBox";
import Image from "next/image";

export default function UnitedStatesBanksReports() {
  return (
    <div className="mt-10 grid grid-cols-4 gap-20 flex items-center">
      <a
        href={"https://www.federalreserve.gov/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="미국 연방 준비 제도">
          <IUnitedStatesSquare />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.imf.org/en/Research"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="IMF">
          <Image
            src="/logo/country/us/imf.webp"
            alt="IMF 로고"
            width="160"
            height="120"
            className="object-contain"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.jpmorgan.com/global"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="JP 모건">
          <Image
            src="/logo/country/us/jp-morgan.webp"
            alt="JP 모건 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.goldmansachs.com/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="골드만 삭스">
          <Image
            src="/logo/country/us/goldman-sachs.webp"
            alt="골드만 삭스 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
    </div>
  );
}
