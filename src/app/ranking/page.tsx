import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import Boy from "@/assets/characters/boy.png";
import RankProfile from "@/components/RankProfile";

const page = () => {
  const rankList = [
    { name: "김예진", classInfo: "3학년 2반", rank: 4, amount: 4872048800 },
    { name: "김시연", classInfo: "3학년 3반", rank: 5, amount: 4523048800 },
    { name: "김예진", classInfo: "3학년 1반", rank: 6, amount: 4212048800 },
    { name: "김예진", classInfo: "3학년 1반", rank: 7, amount: 2720488000 },
    { name: "김예진", classInfo: "2학년 4반", rank: 8, amount: 2459088000 },
    { name: "김예진", classInfo: "1학년 5반", rank: 9, amount: 2187048800 },
    { name: "김예진", classInfo: "2학년 2반", rank: 10, amount: 2078048800 },
    { name: "김예진", classInfo: "3학년 3반", rank: 11, amount: 1952048800 },
    { name: "김예진", classInfo: "1학년 1반", rank: 12, amount: 1839048800 },
    { name: "김예진", classInfo: "2학년 1반", rank: 13, amount: 1723048800 },
    { name: "김예진", classInfo: "3학년 4반", rank: 14, amount: 1650048800 },
    { name: "김예진", classInfo: "2학년 3반", rank: 15, amount: 1543048800 },
    { name: "김예진", classInfo: "1학년 2반", rank: 16, amount: 1432048800 },
    { name: "김예진", classInfo: "1학년 3반", rank: 17, amount: 1348048800 },
    { name: "김예진", classInfo: "2학년 5반", rank: 18, amount: 1280048800 },
  ];
  return (
    <main className="w-full flex flex-col items-center bg-grey-300 pb-10">
      <Header name="김시연" />
      <main className="flex flex-col items-center pt-44 gap-10">
        <section className="flex w-[37.5rem] relative">
          <article className="flex flex-col items-center w-[12.5rem]">
            <Image src={Boy} alt="Boy" className="absolute -top-[170px]" />
            <article className="flex flex-col items-center w-full bg-white pt-[1.75rem] pb-12 rounded-tl-[2.5rem] rounded-bl-[1.25rem] text-h4 font-semibold mt-auto">
              <p className="flex items-center justify-center rounded-full w-10 h-10 bg-[#27C6D7] text-white">
                2
              </p>
              <p className="mt-3 mb-1 text-grey-900">김시연</p>
              <p className="text-primary">2,720,488,000</p>
            </article>
          </article>
          <article className="flex flex-col items-center w-[12.5rem]">
            <Image src={Boy} alt="Boy" className="absolute -top-[230px]" />
            <article className="flex flex-col items-center w-full bg-white pt-[1.75rem] pb-[6.6875rem] rounded-t-[2.5rem] text-h4 font-semibold border border-grey-300 mt-auto">
              <p className="flex items-center justify-center rounded-full w-10 h-10 bg-primary text-white">
                1
              </p>
              <p className="mt-3 mb-1 text-grey-900">김예진</p>
              <p className="text-primary">2,720,488,000</p>
            </article>
          </article>
          <article className="flex flex-col items-center w-[12.5rem]">
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
            <RankProfile
              key={profile.rank}
              name={profile.name}
              classInfo={profile.classInfo}
              rank={profile.rank}
              amount={profile.amount}
            />
          ))}
        </section>
      </main>
    </main>
  );
};

export default page;
