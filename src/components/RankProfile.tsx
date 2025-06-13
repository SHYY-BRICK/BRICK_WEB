import React from "react";

interface RankProfileProps {
  rank: number;
  classInfo: string;
  name: string;
  amount: number;
}

const RankProfile = ({ rank, classInfo, name, amount }: RankProfileProps) => {
  const formattedAmount =
    typeof amount === "number"
      ? amount.toLocaleString()
      : Number(amount).toLocaleString();

  return (
    <main className="w-[920px] py-5 pl-[1.125rem] flex justify-between border-b border-grey-500">
      <article className="flex gap-[2.062rem] items-center">
        <p className="text-h5 text-primary font-semibold">{rank}</p>
        <figure className="flex gap-3">
          <div className="w-[44px] h-[44px] rounded-full bg-black" />
          <figure className="flex flex-col">
            <p className="text-caption text-grey-800 font-medium">
              {classInfo}
            </p>
            <p className="text-h5 text-grey-1100 font-semibold">{name}</p>
          </figure>
        </figure>
      </article>
      <article className="flex items-center">{formattedAmount}</article>
    </main>
  );
};

export default RankProfile;
