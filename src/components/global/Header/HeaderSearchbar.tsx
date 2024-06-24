import ISearch from "@/assets/icons/ISearch";

export default function HeaderSearchbar() {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 border rounded-md flex justify-between items-center">
        <form className="w-11/12">
          <input
            className="p-2 w-full"
            name="keyword"
            placeholder="이 웹사이트에서 검색하기"
            type="text"
            alt=""
          />
        </form>
        <button className="pr-0.5">
          <ISearch />
        </button>
      </div>
    </div>
  );
}
