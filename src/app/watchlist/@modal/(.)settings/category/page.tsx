"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import IClose from "@/assets/icons/IClose";
import Link from "next/link";
import ICheckOutline from "@/assets/icons/ICheckOutline";
import IPencil from "@/assets/icons/IPencil";
import ICheckFilled from "@/assets/icons/ICheckFilled";
import { Category } from "@/types/categoryType";
import { getCategories } from "@/utils/IndexedDB/getCategories";
import { addCategory } from "@/utils/IndexedDB/addCategory";
import { updateCategory } from "@/utils/IndexedDB/updateCategory";
import { getDB } from "@/utils/IndexedDB/getDB";
import { STORE_NAME } from "@/constants/IndexedDBStore";
import { deleteCategories } from "@/utils/IndexedDB/deleteCategories";
import { useWatchListCategoryNameStore } from "@/state/stores/watchListCategoryNameStore";
import useSetCategories from "@/hooks/useSetCategories";

export default function CategoryMenu() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [hasChanges, setHasChanges] = useState<boolean>(false);
  const { setCategoryName } = useWatchListCategoryNameStore();
  const { categories, setCategories } = useSetCategories();

  const handleClick = useCallback(() => {
    router.push("/watchlist");
  }, [router]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const inputValue = inputRef?.current?.value;
      if (inputValue) {
        await addCategory(inputValue);
        if (inputRef.current) inputRef.current.value = "";
        const updatedCategories = await getCategories();
        setCategories(updatedCategories);
      }
    },
    [setCategories]
  );

  const handleEditStart = useCallback((category: Category) => {
    setEditingId(category.id);
    setEditingName(category.name);
  }, []);

  const handleEditSave = useCallback(
    async (category: Category) => {
      if (editingName.trim() !== "") {
        const updatedCategory = { ...category, name: editingName.trim() };
        await updateCategory(updatedCategory);
        setCategories((prevCategories) =>
          prevCategories.map((c) =>
            c.id === category.id ? updatedCategory : c
          )
        );
        setEditingId(null);
        setEditingName("");
      }
    },
    [editingName, setCategories]
  );

  const handleEditCancel = useCallback(() => {
    setEditingId(null);
    setEditingName("");
  }, []);

  const handleCheckToggle = useCallback((id: string) => {
    setSelectedCategories((prev) => {
      const newSelected = prev.includes(id)
        ? prev.filter((cId) => cId !== id)
        : [...prev, id];
      setHasChanges(newSelected.length > 0);
      return newSelected;
    });
  }, []);

  const handleMoveCategory = useCallback(
    (direction: "up" | "down") => {
      if (selectedCategories.length !== 1) return;

      const currentIndex = categories.findIndex(
        (c) => c.id === selectedCategories[0]
      );

      if (currentIndex === -1) return;

      let newIndex: number;

      if (direction === "up" && currentIndex > 0) {
        newIndex = currentIndex - 1;
      } else if (direction === "down" && currentIndex < categories.length - 1) {
        newIndex = currentIndex + 1;
      } else {
        return;
      }

      const newCategories = [...categories];
      const [movedCategory] = newCategories.splice(currentIndex, 1);

      newCategories.splice(newIndex, 0, movedCategory);
      newCategories.forEach((category, index) => {
        category.order = index + 1;
      });

      setCategories(newCategories);
      setHasChanges(true);
    },
    [categories, selectedCategories, setCategories]
  );

  const handleSaveReorder = useCallback(async () => {
    if (hasChanges) {
      const updatedCategories = categories.map((category, index) => ({
        ...category,
        order: index + 1,
      }));

      setCategories(updatedCategories);
      setSelectedCategories([]);
      setHasChanges(false);

      const db = await getDB();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);

      for (const category of updatedCategories) {
        await store.put(category);
      }

      await tx.done;
    }
  }, [hasChanges, categories, setCategories]);

  const handleCancelReorder = useCallback(() => {
    setSelectedCategories([]);
    setHasChanges(false);
  }, []);

  const handleDeleteCategories = useCallback(async () => {
    try {
      await deleteCategories(selectedCategories);
      setCategories(
        categories.filter(
          (category) => !selectedCategories.includes(category.id)
        )
      );
      setSelectedCategories([]);
      setHasChanges(false);
      setCategoryName("");
      router.push("/watchlist");

      setTimeout(() => {
        router.push("/watchlist/settings/category");
      }, 1);
    } catch (error) {
      console.error("Failed to delete categories:", error);
    }
  }, [selectedCategories, categories, setCategories, setCategoryName, router]);

  return (
    <div className="w-1/4 h-full absolute top-0 right-0 border-l-2 bg-white overflow-scroll">
      <div className="flex justify-between items-center py-11 px-5 border-b-2">
        <h2 className="text-xl font-semibold">추가 및 편집</h2>
        <button className="w-8" onClick={handleClick}>
          <IClose />
        </button>
      </div>
      <div className="flex border-b-2">
        <div className="w-1/2 bg-gray-100">
          <Link href="/watchlist/settings/category">
            <h2 className="flex justify-center py-2 border-r text-gray-700">
              카테고리 메뉴
            </h2>
          </Link>
        </div>
        <div className="w-1/2">
          <Link href="/watchlist/settings/interests">
            <h2 className="flex justify-center py-2 border-l text-gray-700">
              관심 종목 메뉴
            </h2>
          </Link>
        </div>
      </div>
      <form className="flex flex-col items-center mt-5" onSubmit={handleSubmit}>
        <div className="w-11/12 border mb-2">
          <input
            type="text"
            placeholder="카테고리를 추가하세요."
            className="w-full px-2 py-2"
            ref={inputRef}
          />
        </div>
        <button
          type="submit"
          aria-label="새로운 카테고리를 추가하는 버튼"
          className="w-11/12 py-2 border rounded-lg text-gray-500 hover:bg-gray-100">
          추가하기
        </button>
      </form>
      <div className="mt-5">
        <h2 className="text-lg font-semibold border-b-2 py-5 pl-5">
          카테고리 목록
        </h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`py-2 px-2 border-b flex items-center ${
                selectedCategories.includes(category.id) ? "bg-gray-100" : ""
              }`}>
              <div
                className="w-6 cursor-pointer"
                onClick={() => handleCheckToggle(category.id)}>
                {selectedCategories.includes(category.id) ? (
                  <ICheckFilled />
                ) : (
                  <ICheckOutline />
                )}
              </div>
              {editingId === category.id ? (
                <>
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    className="flex-1 px-2 border rounded bg-gray-100"
                  />
                  <button
                    onClick={() => handleEditSave(category)}
                    aria-label="변경한 카테고리명을 저장하는 버튼"
                    className="ml-2 px-1 bg-blue-500 text-white rounded">
                    저장
                  </button>
                  <button
                    onClick={handleEditCancel}
                    aria-label="카테고리명 변경을 취소하는 버튼"
                    className="ml-2 px-1 bg-gray-300 rounded">
                    취소
                  </button>
                </>
              ) : (
                <>
                  <div className="flex-1 ml-2">{category.name}</div>
                  <div
                    className="w-6 ml-auto cursor-pointer"
                    onClick={() => handleEditStart(category)}>
                    <IPencil />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        {selectedCategories.length > 0 && (
          <div className="flex flex-col w-full">
            {selectedCategories.length === 1 && (
              <div className="flex w-full mb-px">
                <button
                  onClick={() => handleMoveCategory("up")}
                  aria-label="카테고리의 순서를 위로 이동시키는 버튼"
                  className="w-full py-2 bg-gray-500 text-white text-sm">
                  위로 이동
                </button>
                <button
                  onClick={() => handleMoveCategory("down")}
                  aria-label="카테고리의 순서를 아래로 이동시키는 버튼"
                  className="w-full bg-gray-500 text-white text-sm">
                  아래로 이동
                </button>
                <button
                  onClick={handleSaveReorder}
                  aria-label="변경한 카테고리의 순서를 저장하는 버튼"
                  className="w-full bg-blue-500 text-white text-sm">
                  저장하기
                </button>
                <button
                  onClick={handleCancelReorder}
                  aria-label="카테고리의 순서 변경을 취소하는 버튼"
                  className="w-full bg-red-500 text-white text-sm">
                  취소하기
                </button>
              </div>
            )}
            <button
              onClick={handleDeleteCategories}
              className="w-full py-2 bg-red-500 text-white text-sm">
              선택한 {selectedCategories.length}개의 카테고리 제거하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
