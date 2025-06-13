import CloseIcon from "@/assets/CloseIcon";
import React from "react";

interface CoinStatusProps {
  status: "매수" | "매도";
}

const CoinAlert = ({ status }: CoinStatusProps) => {
  return (
    <main className="flex flex-col w-[560px] items-center justify-center p-9 rounded-lg gap-8">
      <div className="flex flex-col w-full gap-3">
        <div className="flex justify-between w-full">
          <span className="text-h3 text-grey-1000 font-semibold">
            Coin {status}하기
          </span>
          <CloseIcon />
        </div>
        <div className="flex flex-col text-p2 text-grey-1000">
          <span>현재 가지고 계신 자산은 100,000,000원 입니다.</span>
          <span>
            {status} 시 <span className="text-primary">0</span>원이 됩니다.
          </span>
        </div>
      </div>

      <input
        type="number"
        placeholder={`${status} 할 코인의 개수를 입력해 주십시오`}
        className="w-full px-4 py-3 text-p1 border border-grey-500 rounded-lg focus:outline-none font-regular text-p2 text-grey-1300 placeholder:text-grey-600"
      />

      <div className="flex ml-auto gap-4 text-h5">
        <button className="px-3 py-1 font-semibold text-grey-600 rounded-lg">
          취소
        </button>
        <button
          className={`px-3 py-1.5 font-semibold text-white rounded-lg ${
            status === "매도" ? "bg-sell" : "bg-buy"
          }`}
        >
          {status}하기
        </button>
      </div>
    </main>
  );
};

export default CoinAlert;
