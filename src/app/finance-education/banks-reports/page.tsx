import IAustraliaSquare from "@/assets/icons/flags/square/IAustraliaSquare";
import ICanadaSquare from "@/assets/icons/flags/square/ICanadaSquare";
import ISingaporeSquare from "@/assets/icons/flags/square/ISingaporeSquare";
import ISouthKoreaSquare from "@/assets/icons/flags/square/ISouthKoreaSquare";
import IUnitedKingdomSquare from "@/assets/icons/flags/square/IUnitedKingdomSquare";
import IUnitedStatesSquare from "@/assets/icons/flags/square/IUnitedStatesSquare";
import BanksReportsMainBox from "@/components/banks-reports/BanksReportsMainBox";

export default function BanksReports() {
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
        href={"https://www.federalreserve.gov/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="미국 연방 준비 제도">
          <IUnitedStatesSquare />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.bankofengland.co.uk/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="영국 은행">
          <IUnitedKingdomSquare />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.mas.gov.sg/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="싱가포르 통화 관리청">
          <ISingaporeSquare />
        </BanksReportsMainBox>
      </a>
      <a
        href={"https://www.bank-banque-canada.ca/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="캐나다 은행">
          <ICanadaSquare />
        </BanksReportsMainBox>
      </a>

      <a
        href={"https://www.rba.gov.au/"}
        target="_blank"
        rel="noopener noreferrer">
        <BanksReportsMainBox centralBankName="호주 중앙 은행">
          <IAustraliaSquare />
        </BanksReportsMainBox>
      </a>
    </div>
  );
}
