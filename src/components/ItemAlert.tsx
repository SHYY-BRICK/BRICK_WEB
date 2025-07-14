import CloseIcon from "@/assets/CloseIcon";
import { accessoriesDate } from "@/data/accessories";
import { clothesData } from "@/data/clothes";
import Image from "next/image";
import React from "react";

interface ItemAlertProps {
  category: "clothes" | "accessory";
  name: string;
  onClose: () => void;
}

const ItemAlert = ({ category, name, onClose }: ItemAlertProps) => {
  const data = category === "clothes" ? clothesData : accessoriesDate;
  const matchedItem = data.find((item) => item.name === name);

  if (!matchedItem) {
    return <div>아이템을 찾을 수 없습니다.</div>;
  }

  return (
    <main className="flex flex-col w-[300px] h-[376px] bg-white rounded-lg py-6 px-[2.125rem] shadow-lg">
      <header className="flex justify-between items-center">
        <span className="text-h3 text-grey-1200 font-semibold">
          {matchedItem.name}
        </span>
        <button className="z-10" onClick={onClose}>
          <CloseIcon />
        </button>
      </header>

      <span className="text-p1 text-grey-800 font-regular pt-2">
        {matchedItem.info}
      </span>
      <span className="text-p3 text-primary font-regular pb-6">
        {matchedItem.rank}
      </span>

      <div className="flex items-center justify-center flex-1">
        <Image src={matchedItem.image} alt={matchedItem.name} height={176} />
      </div>
    </main>
  );
};

export default ItemAlert;
