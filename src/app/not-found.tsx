import IError from "@/assets/icons/IError";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <IError />
      <h1 className="text-4xl font-bold mt-1">404 Not Found Error</h1>
      <div className="mt-3">
        <span>해당 페이지를 찾을 수 없습니다.</span>
      </div>
      <div className="mt-1">
        <span>아래의 버튼을 클릭하여 홈 페이지로 이동하세요.</span>
      </div>
      <button type="button" className="border rounded-lg mt-5 px-3 py-3">
        <Link href="/">홈 페이지로 이동하기</Link>
      </button>
    </div>
  );
}
