"use client";

import ISearch from "@/assets/icons/ISearch";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function HeaderSearchbar() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    keyword: "",
  });

  const [currentSearch, setCurrentSearch] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setCurrentSearch(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${formData.keyword}`);
    setCurrentSearch("");
  };

  return (
    <div className="flex justify-center">
      <div className="w-11/12 border rounded-md flex justify-between items-center">
        <form className="w-full flex items-center" onSubmit={handleSubmit}>
          <input
            className="p-2 w-11/12"
            name="keyword"
            placeholder="기업명 또는 심볼을 영어로 입력하기"
            type="text"
            alt=""
            onChange={handleChange}
            value={currentSearch}
          />
          <button className="w-5 mr-3">
            <ISearch />
          </button>
        </form>
      </div>
    </div>
  );
}
