import Image from "next/image";
import React from "react";
import { accessoriesDate } from "@/data/accessories";
import { clothesData } from "@/data/clothes";

interface ItemProps {
  category: "clothes" | "accessories";
  name: string;
}

const Item = ({ category, name }: ItemProps) => {
  const data = category === "clothes" ? clothesData : accessoriesDate;
  const matchedItem = data.find((item) => item.name === name);

  if (!matchedItem) {
    return <div>아이템을 찾을 수 없습니다.</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center w-[216px] h-[248px] gap-5 rounded-xl bg-white overflow-hidden">
      <Image
        src={matchedItem.image}
        alt={matchedItem.name}
        height={160}
        className="scale-[2] -translate-y-6 object-contain"
      />
      <span className="text-primary text-h4 font-semibold">
        {matchedItem.name}
      </span>
    </main>
  );
};

export default Item;
