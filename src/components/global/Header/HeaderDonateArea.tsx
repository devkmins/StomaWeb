import IMoney from "@/assets/icons/IMoney";

import { notoSansKR } from "@/assets/fonts/notoSansKR";

export default function HeaderDonateArea() {
  return (
    <div className="mt-5 flex justify-center items-center">
      <a
        href={"https://buymeacoffee.com/stomaweb"}
        target="_blank"
        rel="noopener noreferrer">
        <IMoney />
      </a>
      <div className="ml-1">
        <a
          href={"https://buymeacoffee.com/stomaweb"}
          target="_blank"
          rel="noopener noreferrer">
          <span
            className={`${notoSansKR.style} font-semibold text-[14px] hover:text-gray-500`}>
            응원하기!
          </span>
        </a>
      </div>
    </div>
  );
}
