import CloseIcon from "@/assets/CloseIcon";
import { accessoriesDate } from "@/data/accessories";
import { clothesData } from "@/data/clothes";
import Image from "next/image";
import React from "react";

interface ItemProps {
  category: "clothes" | "accessory";
  name: string;
}

const ItemAlert = ({ category, name }: ItemProps) => {
  const data = category === "clothes" ? clothesData : accessoriesDate;
  const matchedItem = data.find((item) => item.name === name);

  if (!matchedItem) {
    return <div>아이템을 찾을 수 없습니다.</div>;
  }
  return (
    <main className="flex flex-col w-[300px] h-[376px] rounded-lg py-6 px-[2.125rem]">
      <header className="flex justify-between items-center">
        <span className="text-h3 text-grey-1200 font-[semibold]">
          {matchedItem.name}
        </span>
        <CloseIcon />
      </header>
      <span className="text-p1 text-grey-800 font-[regular] pt-2 pb-6">
        {matchedItem.info}
      </span>
      <div className="flex items-center justify-center">
        <Image
          src={matchedItem.image}
          alt={matchedItem.name}
          height={176}
          className="scale-[2] -translate-y-6 object-contain"
        />
      </div>
    </main>
  );
};

export default ItemAlert;
