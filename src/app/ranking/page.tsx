"use client";

import Header from "@/components/Header";
import React, { useState } from "react";
import RankProfile from "@/components/RankProfile";
import DetailModal from "./Detail";
import { useGetRank } from "@/hooks/useGetRank";
import { formatNumberWithCommas } from "@/utils/numberFomat";
import { renderCharacter } from "@/utils/renderCharacter";

const Page = () => {
  const [selectedPerson, setSelectedPerson] = useState<null | {
    name: string;
    rank: number;
    amount: number;
    weeks: number;
    gender: "man" | "woman";
    clothes: string;
    accessories: string;
  }>(null);

  const handleClickPerson = (person: {
    name: string;
    rank: number;
    amount: number;
    weeks: number;
    gender: "man" | "woman";
    clothes: string;
    accessories: string;
  }) => {
    setSelectedPerson(person);
  };

  const { data, isLoading, isError } = useGetRank();
  const rankList = Array.isArray(data) ? data : [];

  const topThreeRaw = rankList.slice(0, 3).map((user, index) => ({
    name: user.nickname,
    rank: index + 1,
    amount: user.money,
    weeks: 2,
    gender: user.gender,
    clothes: user.clothes,
    accessories: user.accessories,
  }));

  const topThree = [topThreeRaw[1], topThreeRaw[0], topThreeRaw[2]];

  const others = rankList.slice(3).map((user, index) => ({
    name: user.nickname,
    rank: index + 4,
    amount: user.money,
    weeks: 1,
    gender: user.gender,
    clothes: user.clothes,
    accessories: user.accessories,
  }));

  return (
    <main className="w-full min-h-[100vh] flex flex-col items-center bg-grey-300 pb-10">
      <Header />
      <main className="flex flex-col items-center pt-44 gap-10">
        {isLoading && <p>랭킹 정보를 불러오는 중입니다...</p>}
        {isError && <p>랭킹 정보를 불러오지 못했습니다.</p>}
        {!isLoading && !isError && (
          <>
            <section className="flex w-[37.5rem] relative">
              {topThree.map((user, idx) => {
                const topStyles = [
                  "-top-[190px]",
                  "-top-[230px]",
                  "-top-[150px]",
                ];
                const podiumHeights = ["h-[200px]", "h-[240px]", "h-[160px]"];
                const rankColors = [
                  "bg-primary",
                  "bg-[#27C6D7]",
                  "bg-[#108D9B]",
                ];

                return (
                  <article
                    key={user.rank}
                    onClick={() => handleClickPerson(user)}
                    className="flex flex-col items-center w-[200px] cursor-pointer"
                  >
                    {renderCharacter({
                      gender: user.gender,
                      clothes: user.clothes,
                      accessories: user.accessories,
                      topStyle: topStyles[idx],
                    })}

                    <article
                      className={`flex flex-col items-center w-full bg-white mt-auto rounded-t-[40px] 
        ${podiumHeights[idx]} 
        text-h4 font-semibold
        ${idx === 0 ? "" : ""} 
        ${idx === 2 ? "rounded-br-[20px]" : ""}`}
                    >
                      <div
                        className={`flex items-center justify-center rounded-full w-10 h-10 ${rankColors[idx]} text-white mt-4`}
                      >
                        {user.rank}
                      </div>
                      <p className="mt-3 mb-1 text-grey-900">{user.name}</p>
                      <p className="text-primary">
                        {formatNumberWithCommas(user.amount)}
                      </p>
                    </article>
                  </article>
                );
              })}
            </section>

            {/* Others */}
            <section className="">
              {others.map((profile) => (
                <div
                  key={profile.rank}
                  onClick={() => handleClickPerson(profile)}
                  className="cursor-pointer"
                >
                  <RankProfile
                    name={profile.name}
                    rank={profile.rank}
                    amount={profile.amount}
                  />
                </div>
              ))}
            </section>
          </>
        )}
      </main>

      {selectedPerson && (
        <DetailModal
          isOpen={!!selectedPerson}
          onClose={() => setSelectedPerson(null)}
          name={selectedPerson.name}
          amount={selectedPerson.amount}
          gender={selectedPerson.gender}
          clothes={selectedPerson.clothes}
          accessories={selectedPerson.accessories}
        />
      )}
    </main>
  );
};

export default Page;
