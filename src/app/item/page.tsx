"use client";

import Header from "@/components/Header";
import React, { useState } from "react";
import Clothes from "@/assets/draws/clothes.png";
import Accessories from "@/assets/draws/accessories.png";
import SmallButton from "@/components/SmallButton";
import Image from "next/image";
import dynamic from "next/dynamic";
import ShowItem from "./ShowItem";
import ClothesList from "./ClothesList";

const Animation = dynamic(() => import("./Animation"), { ssr: false });

const itemInfo = [
  {
    id: 1,
    img: Clothes,
    other: "의상 종류 보러가기",
    draw: "의상 뽑기",
    showDrawLink: "/clothes-list",
  },
  {
    id: 2,
    img: Accessories,
    other: "아이템 종류 보러가기",
    draw: "아이템 뽑기",
    showDrawLink: "/accessories-list",
  },
];

const Page = () => {
  const [category, setCategory] = useState<"clothes" | "accessory">(
    "accessory",
  );
  const [mode, setMode] = useState<"main" | "list" | "animation" | "show">(
    "main",
  );

  const handleDraw = (selectedCategory: "clothes" | "accessory") => {
    setCategory(selectedCategory);
    setMode("animation");
    setTimeout(() => {
      setMode("show");
    }, 5000);
  };

  const handleCloseShowItem = () => {
    setMode("main");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-grey-300 overflow-y-auto">
      <Header name="김시연" />

      {mode === "main" && (
        <main className="flex gap-[6.25rem] z-10 mt-12">
          {itemInfo.map((detail) => (
            <article key={detail.id} className="flex flex-col gap-8">
              <Image src={detail.img} alt={detail.draw} />
              <figure className="flex justify-between">
                <button
                  className="py-2 px-3 border border-grey-600 rounded-lg text-p1 text-grey-800 font-regular"
                  onClick={() => {
                    if (detail.id === 1) {
                      setCategory("clothes");
                      setMode("list");
                    } else {
                      setCategory("accessory");
                      setMode("list");
                    }
                  }}
                >
                  {detail.other}
                </button>
                <SmallButton
                  text={detail.draw}
                  colorType="primary"
                  onClick={() =>
                    handleDraw(detail.id === 1 ? "clothes" : "accessory")
                  }
                />
              </figure>
            </article>
          ))}
        </main>
      )}

      {mode === "list" && <ClothesList category={category} />}

      {mode === "animation" && (
        <div className="fixed top-0 left-0 w-full h-full z-50">
          <Animation />
        </div>
      )}

      {mode === "show" && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
          <ShowItem category={category} onClose={handleCloseShowItem} />
        </div>
      )}
    </div>
  );
};

export default Page;
