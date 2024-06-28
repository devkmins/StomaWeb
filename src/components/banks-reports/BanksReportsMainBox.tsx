interface MainBoxProp {
  children: React.ReactNode;
  centralBankName: string;
}

export default function BanksReportsMainBox({
  children,
  centralBankName,
}: MainBoxProp) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-32 flex">{children}</div>
      <div className="mt-2">
        <span>{centralBankName}</span>
      </div>
    </div>
  );
}
