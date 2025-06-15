import React from "react";
import Image from "next/image";
import { accessoriesDate } from "@/data/accessories";
import { clothesData } from "@/data/clothes";
import SmallButton from "./SmallButton";

interface ItemProps {
  category: "clothes" | "accessory";
  name: string;
  isMine?: boolean;
  onClose?: () => void;
}

const ItemExplan = ({ category, name, isMine, onClose }: ItemProps) => {
  const data = category === "clothes" ? clothesData : accessoriesDate;
  const matchedItem = data.find((item) => item.name === name);

  if (!matchedItem) {
    return <div>아이템을 찾을 수 없습니다.</div>;
  }
  return (
    <main className="flex w-[25rem] h-[12.5rem] p-6 gap-[1.6rem] rounded-lg bg-white">
      <Image
        src={matchedItem.image}
        alt={matchedItem.name}
        height={120}
        className="scale-[2] -translate-y-6 object-contain"
      />
      <section className="flex flex-col justify-between w-full">
        <header className="flex flex-col w-full">
          <span className="text-h4 text-grey-1000">{matchedItem.name}</span>
          <span className="text-p2 text-grey-700">{matchedItem.info}</span>
        </header>
        <figure className="flex ml-auto gap-2">
          {isMine ? (
            <>
              <SmallButton text="착용" colorType="primary" />
              <SmallButton text="해제" colorType="red" />
            </>
          ) : (
            <SmallButton text="완료" colorType="primary" onClick={onClose} />
          )}
        </figure>
      </section>
    </main>
  );
};

export default ItemExplan;
