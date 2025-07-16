"use client";

import BigButton from "@/components/BigButton";
import CoinAlert from "@/components/CoinAlert";
import CoinChart from "@/components/CoinChart";
import Header from "@/components/Header";
import SmallButton from "@/components/SmallButton";
import StockMini from "@/components/StockMini";
import { usePostTodayMoney } from "@/hooks/usePostTodayMoney";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useGetCoin } from "@/hooks/useGetCoin";
import { useGetCoinDetail } from "@/hooks/useGetCoinDetail";

const Page = () => {
  const { data: fluctuationData, isLoading } = useGetCoin();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"매수" | "매도" | null>(null);
  const { mutate: postTodayMoney } = usePostTodayMoney();

  const coins = (Array.isArray(fluctuationData) ? fluctuationData : []).map(
    (coin) => {
      const change = coin.currentPrice - coin.previousPrice;
      return {
        stockName: coin.coinName,
        stockNum: coin.totalUserHolding,
        stockPrice: coin.previousPrice,
        stockChange: change,
        stockChangeRate: coin.fluctuationPercent.toFixed(1),
      };
    },
  );

  const [selectedCoin, setSelectedCoin] = useState<(typeof coins)[0] | null>(
    null,
  );

  const { data: chartData, isLoading: chartLoading } = useGetCoinDetail(
    selectedCoin?.stockName ?? null,
  );

  useEffect(() => {
    if (coins.length > 0) {
      setSelectedCoin(coins[0]);
    }
  }, [fluctuationData]);

  const handleDailyReward = () => {
    postTodayMoney(undefined, {
      onSuccess: () => {
        alert("💰 일일 보상이 지급되었습니다!");
      },
      onError: (error: Error) => {
        if (error instanceof AxiosError) {
          const status = error.response?.status || 0;
          if (status === 404) {
            alert("유저 정보를 찾을 수 없습니다.");
          } else if (status === 429) {
            alert("이미 오늘의 보상을 받았습니다.");
          } else {
            alert("이미 오늘의 보상을 받았습니다.");
          }
        } else {
          alert("알 수 없는 오류가 발생했습니다.");
        }
      },
    });
  };

  if (isLoading || !selectedCoin) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        코인 정보를 불러오는 중...
      </div>
    );
  }

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-grey-300">
      <Header />
      <main className="flex py-24 pl-[61px] w-full gap-[1.5625rem]">
        <section className="flex flex-col w-full">
          <header className="flex justify-between items-center pb-9">
            <p className="text-h2 text-[#2C2C2C] font-bold">
              {selectedCoin.stockName} coin
            </p>
            <SmallButton
              text="일일 보상 받기"
              colorType="primary"
              onClick={handleDailyReward}
            />
          </header>
          <section className="w-full">
            {chartLoading ? (
              <p className="text-center py-10 text-grey-700">
                코인 상세 정보를 불러오는 중...
              </p>
            ) : (
              <CoinChart coin={selectedCoin} chartData={chartData || []} />
            )}
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
        <aside className="w-[25%] py-10 rounded-l-2xl bg-white max-h-[calc(100vh-6rem)] overflow-y-auto">
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
        <div className="fixed inset-0 z-50 bg-[rgba(39,39,39,0.2)] backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg">
            <CoinAlert
              status={modalType}
              onClose={() => setShowModal(false)}
              coinName={selectedCoin.stockName}
              coinPrice={selectedCoin.stockPrice}
              coinNum={selectedCoin.stockNum}
              onSuccess={() => {
                window.location.reload();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
