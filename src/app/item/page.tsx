"use client";

import Header from "@/components/Header";
import React from "react";
import Clothes from "@/assets/draws/clothes.png";
import Accessories from "@/assets/draws/accessories.png";
import SmallButton from "@/components/SmallButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const itemInfo = [
  {
    id: 1,
    img: Clothes,
    other: "의상 종류 보러가기",
    draw: "의상 뽑기",
    goDrawLink: "/clothes-draw",
    showDrawLink: "/clothes-list",
  },
  {
    id: 2,
    img: Accessories,
    other: "아이템 종류 보러가기",
    draw: "아이템 뽑기",
    goDraw: "/accessories-draw",
    showDrawLink: "/accessories-list",
  },
];

const Page = () => {
  const router = useRouter();

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-[6.25rem] items-center bg-grey-300">
      <Header name="김시연" />
      <main className="flex gap-[6.25rem]">
        {itemInfo.map((detail) => (
          <article key={detail.id} className="flex flex-col gap-8">
            <Image src={detail.img} alt={detail.draw} />
            <figure className="flex justify-between">
              <button
                className="py-2 px-3 border border-grey-600 rounded-lg text-p1 text-grey-800 font-regular"
                onClick={() => router.push(detail.showDrawLink)}
              >
                {detail.other}
              </button>
              <SmallButton
                text={detail.draw}
                colorType="primary"
                onClick={() => router.push(detail.goDrawLink!)}
              />
            </figure>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Page;
