"use client";

import { useParams } from "next/navigation";

export default function Search() {
  const params = useParams();

  return <h1>검색: {params.keyword}</h1>;
}
