import IUnitedKingdomSquare from "@/assets/icons/flags/square/IUnitedKingdomSquare";
import BanksReportsMainBox from "@/components/banks-reports/BanksReportsMainBox";
import Image from "next/image";

export default function UnitedKingdomBanksReports() {
  return (
    <div className="mt-10 grid grid-cols-4 gap-20 flex items-center">
      <a
        href={"https://www.bankofengland.co.uk/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="영국 은행">
          <IUnitedKingdomSquare />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://home.barclays/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="바클리즈">
          <Image
            src="/logo/country/gb/barclays.webp"
            alt="바클리즈 로고"
            width="160"
            height="120"
            className="object-contain"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.hsbc.com.hk/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="홍콩상하이은행">
          <Image
            src="/logo/country/gb/hsbc.webp"
            alt="홍콩상하이은행 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.lloydsbankinggroup.com/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="로이즈 뱅킹 그룹">
          <Image
            src="/logo/country/gb/lloyds-banking-group.webp"
            alt="로이즈 뱅킹 로고"
            width="160"
            height="120"
          />
        </BanksReportsMainBox>
      </a>
    </div>
  );
}
