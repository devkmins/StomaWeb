import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center border border-slate-400 rounded-lg px-20 py-40">
        <h1 className="text-4xl font-bold">Coming Soon!</h1>
        <div className="mt-3">
          <span>현재 페이지 오픈 준비 중입니다.</span>
        </div>
        <button className="mt-3 border px-5 py-3 rounded-lg hover:border-slate-600">
          <Link href="/">
            <span>홈으로 가기</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
