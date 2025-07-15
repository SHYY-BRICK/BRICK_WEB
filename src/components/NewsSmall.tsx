import React from "react";

interface NewsSmallProps {
  title: string;
  description: string;
  date: string;
}

const NewsSmall = ({ title, description, date }: NewsSmallProps) => {
  return (
    <main className="flex flex-col w-full h-[11.5625rem] rounded-xl p-6 gap-[0.5625rem] bg-white overflow-hidden">
      <p className="text-h5 text-grey-1200 font-semibold">{title}</p>
      <p className="text-p2 text-grey-700 font-regular">{description}</p>
      <p className="text-caption text-grey-900 font-medium">{date}</p>
    </main>
  );
};

export default NewsSmall;
