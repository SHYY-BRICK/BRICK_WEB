import React from "react";
import { coins } from "@/data/coins";
import { ComponentType } from "react";
import { formatNumberWithCommas } from "@/utils/numberFomat";

type TransactionType = "매수" | "매도";

interface MyTransactionProps {
  type: TransactionType;
  label: string;
  amount: string;
  date: string;
  period: string;
}

const MyTransaction = ({
  type,
  label,
  amount,
  date,
  period,
}: MyTransactionProps) => {
  const typeColor = type === "매수" ? "text-buy" : "text-sell";

  const matchedCoin = coins.find((coin) => coin.label === label);
  const Icon = matchedCoin?.image as ComponentType | null;

  return (
    <main className="flex justify-between w-[32.5rem] py-5 border-b border-grey-500">
      <article className="flex items-center">
        <p className={`pl-[0.375rem] text-h5 font-semibold pr-4 ${typeColor}`}>
          {type}
        </p>
        <figure>
          {Icon ? <Icon /> : <div className="bg-red-400 w-4 h-4" />}
        </figure>
        <p className="text-h5 text-grey-1000 font-semibold pl-3">{label}</p>
      </article>
      <article className="flex gap-[4.625rem] items-center">
        <p className="text-grey-1100 text-h5 font-semibold">
          {formatNumberWithCommas(amount)}
        </p>
        <figure className="flex text-p1 text-grey-1100 gap-4">
          <p>{date}</p>
          <p>{period}</p>
        </figure>
      </article>
    </main>
  );
};

export default MyTransaction;
