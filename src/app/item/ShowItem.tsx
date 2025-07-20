"use client";

import React, { useEffect, useState } from "react";
import { accessoriesDate } from "@/data/accessories";
import { clothesData } from "@/data/clothes";
import ItemExplan from "@/components/ItemExplan";
import { StaticImageData } from "next/image";
import { usePostGetItem } from "@/hooks/usePostGetItem";

interface Item {
  id: number;
  name: string;
  image: StaticImageData;
  info: string;
  rank: string;
}

interface ShowItemProps {
  category: "accessories" | "clothes";
  onClose: () => void;
}

const getWeight = (rank: string): number => {
  if (rank.includes("60")) return 60;
  if (rank.includes("30")) return 30;
  if (rank.includes("8")) return 8;
  if (rank.includes("2")) return 2;
  return 0;
};

const getRandomItem = (category: "accessories" | "clothes"): Item => {
  const data = category === "clothes" ? clothesData : accessoriesDate;
  const weightedList: Item[] = [];

  data.forEach((item) => {
    const weight = getWeight(item.rank);
    for (let i = 0; i < weight; i++) {
      weightedList.push(item);
    }
  });

  const randomIndex = Math.floor(Math.random() * weightedList.length);
  return weightedList[randomIndex];
};

const ShowItem = ({ category, onClose }: ShowItemProps) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const { mutate } = usePostGetItem();

  useEffect(() => {
    const item = getRandomItem(category);
    setSelectedItem(item);
  }, [category]);

  const handleComplete = () => {
    if (!selectedItem) return;

    mutate(
      {
        type: category,
        name: selectedItem.name,
      },
      {
        onSuccess: () => {
          onClose();
        },
        onError: () => {
          alert("아이템 저장에 실패했습니다. 다시 시도해주세요.");
        },
      },
    );
  };

  if (!selectedItem) return null;

  return (
    <main className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.4)] backdrop-blur-[5px] z-50">
      <ItemExplan
        category={category}
        name={selectedItem.name}
        onClose={handleComplete}
      />
    </main>
  );
};

export default ShowItem;
