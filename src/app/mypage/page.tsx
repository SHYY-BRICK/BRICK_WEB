"use client";

import Header from "@/components/Header";
import React, { useState } from "react";
import Boy from "@/assets/characters/boy.png";
import Image from "next/image";
import ItemExplan from "@/components/ItemExplan";
import LeftArrowIcon from "@/assets/LeftArrowIcon";
import RightArrowIcon from "@/assets/RightArrowIcon";
import MyTransaction from "@/components/MyTransaction";
import SmallButton from "@/components/SmallButton";

const Page = () => {
  const ClothesDetail = [
    { id: 1, name: "흰티 청바지" },
    { id: 2, name: "개발자룩" },
    { id: 3, name: "노랑 체육복" },
    { id: 4, name: "파랑 체육복" },
    { id: 5, name: "맨투맨" },
    { id: 6, name: "원피스" },
  ];
  const AccessoriesDetail = [
    { id: 1, name: "에어팟" },
    { id: 2, name: "콧수염" },
    { id: 3, name: "뿔테안경" },
    { id: 4, name: "새싹" },
    { id: 5, name: "머리핀" },
    { id: 6, name: "마스크" },
  ];

  const [clothesIndex, setClothesIndex] = useState(0);
  const [accessoryIndex, setAccessoryIndex] = useState(0);

  const ITEMS_PER_PAGE = 3;

  const handleSlide = (
    type: "clothes" | "accessory",
    direction: "prev" | "next",
  ) => {
    const detailList = type === "clothes" ? ClothesDetail : AccessoriesDetail;
    const currentIndex = type === "clothes" ? clothesIndex : accessoryIndex;

    const newIndex =
      direction === "prev"
        ? Math.max(currentIndex - ITEMS_PER_PAGE, 0)
        : Math.min(
            currentIndex + ITEMS_PER_PAGE,
            detailList.length - ITEMS_PER_PAGE,
          );

    if (type === "clothes") {
      setClothesIndex(newIndex);
    } else {
      setAccessoryIndex(newIndex);
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex flex-col bg-grey-300">
      <Header name="김시연" />
      <main className="py-[95px] px-[104px] gap-20">
        <section className="flex flex-col items-center gap-20">
          <section className="flex relative">
            <Image src={Boy} alt="Boy" />
            <figure className="absolute top-64 right-0">
              <SmallButton text="저장" colorType="primary" />
            </figure>

            <figure className="flex flex-col justify-center">
              <p className="text-h3 font-semibold text-black pb-3">김시연</p>
              <figure className="flex gap-3 text-h4 font-semibold pb-1">
                <p className="text-grey-1100">내 자산</p>
                <p className="text-primary">210312480</p>
              </figure>
              <figure className="flex gap-3 text-h4 font-semibold">
                <p className="text-grey-1100">내 코인</p>
                <p className="text-primary">
                  100000<span className="text-grey-1100">주</span>
                </p>
              </figure>
            </figure>
          </section>

          <section className="flex flex-col gap-20 w-full">
            {/* Clothes Section */}
            <section className="flex flex-col w-full items-center">
              <figure className="flex flex-col w-fit gap-4">
                <figure className="flex w-full">
                  <p className="text-h3 text-grey-1200 font-semibold">
                    구매한 의상
                  </p>
                  <figure className="flex ml-auto">
                    <button onClick={() => handleSlide("clothes", "prev")}>
                      <LeftArrowIcon />
                    </button>
                    <button onClick={() => handleSlide("clothes", "next")}>
                      <RightArrowIcon />
                    </button>
                  </figure>
                </figure>
                <div className="flex items-center gap-2">
                  <div className="flex gap-4 overflow-hidden">
                    {ClothesDetail.slice(
                      clothesIndex,
                      clothesIndex + ITEMS_PER_PAGE,
                    ).map((item) => (
                      <ItemExplan
                        key={item.id}
                        category="clothes"
                        name={item.name}
                        isMine={true}
                        onClose={() => console.log("Item closed")}
                      />
                    ))}
                  </div>
                </div>
              </figure>
            </section>

            {/* Accessories Section */}
            <section className="flex flex-col w-full items-center">
              <figure className="flex flex-col w-fit gap-4">
                <figure className="flex w-full">
                  <p className="text-h3 text-grey-1200 font-semibold">
                    구매한 악세서리
                  </p>
                  <figure className="flex ml-auto">
                    <button onClick={() => handleSlide("accessory", "prev")}>
                      <LeftArrowIcon />
                    </button>
                    <button onClick={() => handleSlide("accessory", "next")}>
                      <RightArrowIcon />
                    </button>
                  </figure>
                </figure>
                <div className="flex items-center gap-2">
                  <div className="flex gap-4 overflow-hidden">
                    {AccessoriesDetail.slice(
                      accessoryIndex,
                      accessoryIndex + ITEMS_PER_PAGE,
                    ).map((item) => (
                      <ItemExplan
                        key={item.id}
                        category="accessory"
                        name={item.name}
                        isMine={true}
                        onClose={() => console.log("Item closed")}
                      />
                    ))}
                  </div>
                </div>
              </figure>
            </section>
            <section className="flex flex-col w-full justify-center items-center">
              <figure className="flex flex-col items-center justify-center gap-4 w-fit">
                <figure className="flex w-full ">
                  <p className="text-h3 text-grey-1200 font-semibold">
                    거래내역
                  </p>
                </figure>
                <div className="grid grid-cols-2 gap-x-48">
                  {[
                    {
                      type: "매수",
                      label: "마루",
                      amount: "12323451",
                      date: "2024.02.13",
                      period: "4주",
                    },
                    {
                      type: "매수",
                      label: "마루",
                      amount: "99999999",
                      date: "2024.03.01",
                      period: "2주",
                    },
                    {
                      type: "매도",
                      label: "마루",
                      amount: "88888888",
                      date: "2024.04.01",
                      period: "3주",
                    },
                    {
                      type: "매수",
                      label: "마루",
                      amount: "77777777",
                      date: "2024.05.01",
                      period: "1주",
                    },
                    {
                      type: "매도",
                      label: "마루",
                      amount: "66666666",
                      date: "2024.06.01",
                      period: "5주",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <MyTransaction
                        type={item.type as "매수" | "매도"}
                        label={item.label}
                        amount={item.amount}
                        date={item.date}
                        period={item.period}
                      />
                    </div>
                  ))}
                </div>
              </figure>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Page;
