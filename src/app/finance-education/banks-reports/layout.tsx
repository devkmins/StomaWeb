import BanksReportsDropDown from "@/components/banks-reports/BanksReportsDropDown";

export default function BanksReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen my-10 mx-10">
      <h1 className="text-3xl font-semibold">전 세계 은행들의 보고서</h1>
      <BanksReportsDropDown />
      {children}
    </div>
  );
}
