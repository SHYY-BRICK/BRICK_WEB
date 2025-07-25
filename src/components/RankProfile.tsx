import React from "react";

interface RankProfileProps {
  rank: number;
  name: string;
  amount: number;
}

const RankProfile = ({ rank, name, amount }: RankProfileProps) => {
  const formattedAmount =
    typeof amount === "number"
      ? amount.toLocaleString()
      : Number(amount).toLocaleString();

  return (
    <main className="w-[920px] py-5 pl-[1.125rem] flex justify-between border-b border-grey-500">
      <article className="flex gap-[2.062rem] items-center">
        <p className="text-h5 text-primary font-semibold">{rank}</p>
        <figure className="flex gap-3">
          <figure className="flex items-center">
            <p className="text-h5 text-grey-1100 font-semibold">{name}</p>
          </figure>
        </figure>
      </article>
      <p className="flex items-center text-p1 text-grey-1100 font-regular">
        {formattedAmount}
      </p>
    </main>
  );
};

export default RankProfile;
