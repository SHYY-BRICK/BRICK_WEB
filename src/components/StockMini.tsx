"use client";

import React, { useState } from "react";

interface StockMiniProps {
  stockName: string;
  stockNum?: number;
  stockPrice: number;
  stockChange: string;
  stockChangeRate: string;
}

const StockMini = ({
  stockName,
  stockNum,
  stockPrice,
  stockChange,
  stockChangeRate,
}: StockMiniProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <main
      onClick={handleClick}
      className="flex w-[16.5rem] cursor-pointer py-[0.5rem] px-3 border-t-[0.0625rem] border-grey-400 bg-white"
    >
      <div
        className={`flex justify-between w-full py-[0.4688rem] px-[0.375rem] rounded-xl ${
          isClicked ? "bg-grey-700" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-[0.375rem]">
          <div className="w-8 h-8 rounded-full bg-grey-400" />
          <div className="flex flex-col">
            <span className="text-p1 text-grey-1200 font-[regular]">
              {stockName}
            </span>
            <span className="text-caption text-grey-700 font-[medium]">
              {stockNum}주
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-p2 text-grey-1000 font-[regular] ml-auto">
            {stockPrice}원
          </span>
          <span className="text-caption text-blue font-[medium]">
            {stockChange}({stockChangeRate}%)원
          </span>
        </div>
      </div>
    </main>
  );
};

export default StockMini;
