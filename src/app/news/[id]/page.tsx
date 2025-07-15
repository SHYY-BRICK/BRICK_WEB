"use client";

import LeftArrowIcon from "@/assets/LeftArrowIcon";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";

interface NewsData {
  id: number;
  title: string;
  content: string;
  date: string;
  time: string;
}

const Page = () => {
  const handleBackClick = () => window.history.back();

  const [news, setNews] = useState<NewsData | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("selectedNews");
    if (raw) {
      const parsed: NewsData = JSON.parse(raw);
      setNews(parsed);
    }
  }, []);

  if (!news) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg">
        뉴스를 불러올 수 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] bg-grey-300">
      <Header name="김시연" />
      <main className="flex flex-col w-[57.5rem] gap-8 py-[2.3125rem]">
        <header
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleBackClick}
        >
          <LeftArrowIcon />
          <p className="text-p1 text-grey-700 font-regular">돌아가기</p>
        </header>
        <section className="flex flex-col w-full py-12 px-[3.25rem] bg-white rounded-3xl gap-11">
          <article className="flex flex-col gap-2">
            <p className="text-h2 text-grey-1200 font-bold">{news.title}</p>
            <p className="text-p3 text-grey-700 font-regular">
              {news.date} {news.time}
            </p>
            <span className="w-full h-px bg-grey-500" />
          </article>
          <article className="flex flex-col gap-5">
            <article className="flex items-start gap-[20px]">
              <span className="w-[0.125rem] h-full bg-primary" />
              <p className="py-1 text-h5 text-grey-1200 font-semibold">
                뉴스 요약
              </p>
            </article>
            <p className="text-p1 text-grey-1000 font-regular">
              {news.content}
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Page;
