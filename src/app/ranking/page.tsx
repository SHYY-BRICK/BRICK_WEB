"use client";

import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";
import Boy from "@/assets/characters/boy.png";
import RankProfile from "@/components/RankProfile";
import DetailModal from "./Detail";

const Page = () => {
  const [selectedPerson, setSelectedPerson] = useState<null | {
    name: string;
    rank: number;
    amount: number;
    weeks: number;
  }>(null);

  const handleClickPerson = (person: (typeof rankList)[number]) => {
    setSelectedPerson(person);
  };
  const rankList = [
    {
      name: "김예진",
      rank: 4,
      amount: 4872048800,
      weeks: 10,
    },
    {
      name: "김시연",
      rank: 5,
      amount: 4523048800,
      weeks: 8,
    },
    {
      name: "김예진",
      rank: 6,
      amount: 4212048800,
      weeks: 6,
    },
    {
      name: "김예진",
      rank: 7,
      amount: 2720488000,
      weeks: 5,
    },
    {
      name: "김예진",
      rank: 8,
      amount: 2459088000,
      weeks: 4,
    },
    {
      name: "김예진",
      rank: 9,
      amount: 2187048800,
      weeks: 3,
    },
    {
      name: "김예진",
      rank: 10,
      amount: 2078048800,
      weeks: 2,
    },
    {
      name: "김예진",
      rank: 11,
      amount: 1952048800,
      weeks: 1,
    },
    {
      name: "김예진",
      rank: 12,
      amount: 1839048800,
      weeks: 0,
    },
    {
      name: "김예진",
      rank: 13,
      amount: 1723048800,
      weeks: 0,
    },
    {
      name: "김예진",
      rank: 14,
      amount: 1650048800,
      weeks: 0,
    },
    {
      name: "김예진",
      rank: 15,
      amount: 1543048800,
      weeks: 0,
    },
    {
      name: "김예진",
      rank: 16,
      amount: 1432048800,
      weeks: 0,
    },
    {
      name: "김예진",
      rank: 17,
      amount: 1348048800,
      weeks: 0,
    },
    {
      name: "김예진",
      rank: 18,
      amount: 1280048800,
      weeks: 0,
    },
  ];
  return (
    <main className="w-full flex flex-col items-center bg-grey-300 pb-10">
      <Header name="김시연" />
      <main className="flex flex-col items-center pt-44 gap-10">
        <section className="flex w-[37.5rem] relative">
          <article
            key={2}
            onClick={() =>
              handleClickPerson({
                name: "김시연",
                rank: 2,
                amount: 2720488000,
                weeks: 10000,
              })
            }
            className="flex flex-col items-center w-[12.5rem] cursor-pointer"
          >
            <Image src={Boy} alt="Boy" className="absolute -top-[170px]" />
            <article className="flex flex-col items-center w-full bg-white pt-[1.75rem] pb-12 rounded-tl-[2.5rem] rounded-bl-[1.25rem] text-h4 font-semibold mt-auto">
              <p className="flex items-center justify-center rounded-full w-10 h-10 bg-[#27C6D7] text-white">
                2
              </p>
              <p className="mt-3 mb-1 text-grey-900">김시연</p>
              <p className="text-primary">2,720,488,000</p>
            </article>
          </article>
          <article
            key={1}
            onClick={() =>
              handleClickPerson({
                name: "김예진",
                rank: 1,
                amount: 2720488000,
                weeks: 10000,
              })
            }
            className="flex flex-col items-center w-[12.5rem] cursor-pointer"
          >
            <Image src={Boy} alt="Boy" className="absolute -top-[230px]" />
            <article className="flex flex-col items-center w-full bg-white pt-[1.75rem] pb-[6.6875rem] rounded-t-[2.5rem] text-h4 font-semibold border border-grey-300 mt-auto">
              <p className="flex items-center justify-center rounded-full w-10 h-10 bg-primary text-white">
                1
              </p>
              <p className="mt-3 mb-1 text-grey-900">김예진</p>
              <p className="text-primary">2,720,488,000</p>
            </article>
          </article>
          <article
            key={3}
            onClick={() =>
              handleClickPerson({
                name: "김시연",
                rank: 3,
                amount: 2720488000,
                weeks: 10000,
              })
            }
            className="flex flex-col items-center w-[12.5rem] cursor-pointer"
          >
            <Image src={Boy} alt="Boy" className="absolute -top-[140px]" />
            <article className="flex flex-col items-center w-full bg-white pt-[1.75rem] pb-[1.0625rem] rounded-tr-[2.5rem] rounded-br-[1.25rem] text-h4 font-semibold mt-auto">
              <p className="flex items-center justify-center rounded-full w-10 h-10 bg-[#108D9B] text-white">
                3
              </p>
              <p className="mt-3 mb-1 text-grey-900">김시연</p>
              <p className="text-primary">2,720,488,000</p>
            </article>
          </article>
        </section>
        <section className="">
          {rankList.map((profile) => (
            <div
              key={profile.rank}
              onClick={() => handleClickPerson(profile)}
              className="cursor-pointer"
            >
              <RankProfile
                key={profile.rank}
                name={profile.name}
                rank={profile.rank}
                amount={profile.amount}
              />
            </div>
          ))}
        </section>
      </main>
      {selectedPerson && (
        <DetailModal
          isOpen={!!selectedPerson}
          onClose={() => setSelectedPerson(null)}
          {...selectedPerson}
        />
      )}
    </main>
  );
};

export default Page;
