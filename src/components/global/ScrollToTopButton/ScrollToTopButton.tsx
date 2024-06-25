"use client";

import IArrowUpCircle from "@/assets/icons/IArrowUpCircle";
import { scrollToTop } from "@/utils/scrollToTop";

export default function ScrollToTopButton() {
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-neutral-400 text-white rounded-full">
      <IArrowUpCircle />
    </button>
  );
}
