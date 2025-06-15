"use client";

import LeftArrowIcon from "@/assets/LeftArrowIcon";
import Item from "@/components/Item";
import React, { useState } from "react";
import { clothesData } from "@/data/clothes";
import { accessoriesDate } from "@/data/accessories";
import ItemAlert from "@/components/ItemAlert";

interface ClothesListProps {
  category: "clothes" | "accessory";
}

const ClothesList = ({ category }: ClothesListProps) => {
  const data = category === "clothes" ? clothesData : accessoriesDate;

  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

  const handleBackClick = () => {
    window.location.reload();
  };

  return (
    <div className="w-full min-h-screen py-9 px-[8.75rem] bg-grey-300 relative">
      <header
        className="flex items-center gap-2 mb-6 cursor-pointer"
        onClick={handleBackClick}
      >
        <LeftArrowIcon />
        <p className="text-p1 text-grey-900">돌아가기</p>
      </header>

      <main className="grid grid-cols-4 gap-6">
        {data.map((item) => (
          <div key={item.id} onClick={() => setSelectedItemName(item.name)}>
            <Item category={category} name={item.name} />
          </div>
        ))}
      </main>

      {selectedItemName && (
        <div className="fixed inset-0 bg-[rgba(39,39,39,0.2)] backdrop-blur-[5px] z-50 flex justify-center items-center">
          <ItemAlert
            category={category}
            name={selectedItemName}
            onClose={() => setSelectedItemName(null)}
          />
        </div>
      )}
    </div>
  );
};

export default ClothesList;
