"use client";

import IClose from "@/assets/icons/IClose";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
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
import useSetCategories from "@/hooks/useSetCategories";

export default function CategoryMenu() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [tempCategories, setTempCategories] = useState<Category[]>([]);
  const [hasChanges, setHasChanges] = useState(false);
  const { categories, setCategories } = useSetCategories();

  const handleClick = () => {
    router.push("/watchlist");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = inputRef?.current?.value as string;

    if (inputValue) {
      await addCategory(inputValue);
      if (inputRef.current) inputRef.current.value = "";

      const updatedCategories = await getCategories();
      setCategories(updatedCategories);
    }
  };

  const handleEditStart = (category: Category) => {
    setEditingId(category.id);
    setEditingName(category.name);
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingName("");
  };

  const handleEditSave = async (category: Category) => {
    if (editingName.trim() !== "") {
      const updatedCategory = { ...category, name: editingName.trim() };
      await updateCategory(updatedCategory);
      setCategories((prevCategories) =>
        prevCategories.map((c) => (c.id === category.id ? updatedCategory : c))
      );
      setEditingId(null);
      setEditingName("");
    }
  };

  const handleCheckToggle = (id: string) => {
    setTempCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? { ...category, isChecked: !category.isChecked }
          : category
      )
    );

    setSelectedCategories((prev) => {
      const newSelected = prev.includes(id)
        ? prev.filter((cId) => cId !== id)
        : [...prev, id];
      setHasChanges(newSelected.length > 0);

      return newSelected;
    });
  };

  const handleMoveCategory = (direction: "up" | "down") => {
    if (selectedCategories.length !== 1) return;

    const currentIndex = tempCategories.findIndex(
      (c) => c.id === selectedCategories[0]
    );

    if (currentIndex === -1) return;

    let newIndex: number;

    if (direction === "up" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (
      direction === "down" &&
      currentIndex < tempCategories.length - 1
    ) {
      newIndex = currentIndex + 1;
    } else {
      return;
    }

    const newCategories = [...tempCategories];
    const [movedCategory] = newCategories.splice(currentIndex, 1);
    newCategories.splice(newIndex, 0, movedCategory);

    newCategories.forEach((category, index) => {
      category.order = index + 1;
    });

    setTempCategories(newCategories);
    setHasChanges(true);
  };

  const handleSaveReorder = async () => {
    if (hasChanges) {
      const updatedCategories = tempCategories.map((category, index) => ({
        ...category,
        isChecked: false,
        order: index + 1,
      }));

      setCategories(updatedCategories);
      setTempCategories(updatedCategories);
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
  };

  const handleCancelReorder = () => {
    const resetCategories = categories.map((category) => ({
      ...category,
      isChecked: false,
    }));
    setTempCategories(resetCategories);
    setSelectedCategories([]);
    setHasChanges(false);
  };

  const handleDeleteCategories = async () => {
    try {
      await deleteCategories(selectedCategories);
      setTempCategories(
        tempCategories.filter(
          (category) => !selectedCategories.includes(category.id)
        )
      );
      setSelectedCategories([]);
      setHasChanges(false);
    } catch (error) {}
  };

  useEffect(() => {
    setTempCategories(
      categories.map((category) => ({ ...category, isChecked: false }))
    );
  }, [categories]);

  useEffect(() => {
    return () => {
      setSelectedCategories([]);
      setHasChanges(false);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-white overflow-scroll flex flex-col items-center">
      <div className="w-1/2 flex justify-between items-center py-10 px-5 border-b-2">
        <h1 className="text-xl font-semibold">추가 및 편집</h1>
        <button className="w-8" onClick={handleClick}>
          <IClose />
        </button>
      </div>
      <form className="w-1/2 mt-5" onSubmit={handleSubmit}>
        <div className="w-full border mb-2">
          <input
            type="text"
            placeholder="카테고리를 추가하세요."
            className="w-full px-2 py-2"
            ref={inputRef}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 border rounded-lg text-gray-500 hover:bg-gray-100">
          추가하기
        </button>
      </form>
      <div className="w-1/2 mt-5">
        <h2 className="text-lg font-semibold border-b-2 py-5 pl-5">
          카테고리 목록
        </h2>
        <ul className="flex flex-col items-center">
          {tempCategories.map((category) => (
            <li
              key={category.id}
              className={`w-full py-2 px-2 border-b flex items-center ${
                category.isChecked ? "bg-gray-100" : ""
              }`}>
              <div
                className="w-6 cursor-pointer"
                onClick={() => handleCheckToggle(category.id)}>
                {category.isChecked ? <ICheckFilled /> : <ICheckOutline />}
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
                    className="ml-2 px-1 bg-blue-500 text-white rounded">
                    저장
                  </button>
                  <button
                    onClick={handleEditCancel}
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
                  className="w-full py-2 bg-gray-500 text-white text-sm">
                  위로 이동
                </button>
                <button
                  onClick={() => handleMoveCategory("down")}
                  className="w-full bg-gray-500 text-white text-sm">
                  아래로 이동
                </button>
                <button
                  onClick={handleSaveReorder}
                  className="w-full bg-blue-500 text-white text-sm">
                  저장하기
                </button>
                <button
                  onClick={handleCancelReorder}
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
