"use client";

import BigButton from "@/components/BigButton";
import CoinAlert from "@/components/CoinAlert";
import CoinChart from "@/components/CoinChart";
import Header from "@/components/Header";
import SmallButton from "@/components/SmallButton";
import StockMini from "@/components/StockMini";
import React, { useState } from "react";

const coins = [
  {
    stockName: "BRICK",
    stockNum: 14,
    stockPrice: 124320,
    stockChange: -10000,
    stockChangeRate: "22.7",
  },
  {
    stockName: "마루",
    stockNum: 20,
    stockPrice: 90000,
    stockChange: 5000,
    stockChangeRate: "5.9",
  },
  {
    stockName: "티나",
    stockNum: 5,
    stockPrice: 34000,
    stockChange: -2000,
    stockChangeRate: "2.1",
  },
  {
    stockName: "IOJ",
    stockNum: 8,
    stockPrice: 75000,
    stockChange: 3000,
    stockChangeRate: "4.2",
  },
  {
    stockName: "BUBBLE",
    stockNum: 8,
    stockPrice: 75000,
    stockChange: 3000,
    stockChangeRate: "4.2",
  },
  {
    stockName: "space",
    stockNum: 8,
    stockPrice: 75000,
    stockChange: 3000,
    stockChangeRate: "4.2",
  },
  {
    stockName: "하프",
    stockNum: 8,
    stockPrice: 75000,
    stockChange: 3000,
    stockChangeRate: "4.2",
  },
  {
    stockName: "부마위키",
    stockNum: 8,
    stockPrice: 75000,
    stockChange: 3000,
    stockChangeRate: "4.2",
  },
  {
    stockName: "티치몬",
    stockNum: 8,
    stockPrice: 75000,
    stockChange: 3000,
    stockChangeRate: "4.2",
  },
  {
    stockName: "FLA",
    stockNum: 8,
    stockPrice: 75000,
    stockChange: 3000,
    stockChangeRate: "4.2",
  },
  {
    stockName: "MATCH",
    stockNum: 8,
    stockPrice: 75000,
    stockChange: 3000,
    stockChangeRate: "4.2",
  },
];

const Page = () => {
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"매수" | "매도" | null>(null);

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-grey-300">
      <Header name="김시연" />
      <main className="flex py-24 pl-[61px] w-full gap-[1.5625rem]">
        <section className="flex flex-col w-full">
          <header className="flex justify-between items-center pb-9">
            <p className="text-h2 text-[#2C2C2C] font-bold">
              {selectedCoin.stockName} coin
            </p>
            <SmallButton text="일일 보상 받기" colorType="primary" />
          </header>
          <section className="w-full">
            <CoinChart coin={selectedCoin} />
          </section>
          <figure className="flex w-full justify-end gap-6 pt-[94px]">
            <BigButton
              text="매수"
              colorType="buy"
              onClick={() => {
                setModalType("매수");
                setShowModal(true);
              }}
            />
            <BigButton
              text="매도"
              colorType="sell"
              onClick={() => {
                setModalType("매도");
                setShowModal(true);
              }}
            />
          </figure>
        </section>
        <aside className="w-[25%] py-10 rounded-l-2xl bg-white h-screen overflow-y-auto">
          <p className="px-5 pb-6 text-h3 font-semibold text-[#212730]">
            보유 코인
          </p>
          <section className="flex flex-col gap-2">
            {coins.map((coin, index) => (
              <StockMini
                key={index}
                stockName={coin.stockName}
                stockNum={coin.stockNum}
                stockPrice={coin.stockPrice}
                stockChange={coin.stockChange}
                stockChangeRate={coin.stockChangeRate}
                selected={selectedCoin.stockName === coin.stockName}
                onClick={() => setSelectedCoin(coin)}
              />
            ))}
          </section>
        </aside>
      </main>
      {showModal && modalType && (
        <div className="fixed inset-0 z-50 bg-[rgba(39,39,39,0.2)] backdrop-blur-sm  flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg">
            <CoinAlert status={modalType} onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
