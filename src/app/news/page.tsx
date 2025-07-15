"use client";

import Header from "@/components/Header";
import NewsBig from "@/components/NewsBig";
import NewsSmall from "@/components/NewsSmall";
import { useRouter } from "next/navigation";
import React from "react";
import { useGetUserAllNews } from "@/hooks/useGetUserAllNews";
import { GetUserAllNews } from "@/types/apis.types";

const Page = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetUserAllNews();

  const handleClick = (news: GetUserAllNews) => {
    sessionStorage.setItem("selectedNews", JSON.stringify(news));
    router.push(`/news/${news.id}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg">
        뉴스를 불러오는 중...
      </div>
    );
  }

  if (isError || !data || !Array.isArray(data)) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-lg">
        뉴스 로딩에 실패했습니다.
      </div>
    );
  }

  const sortedNews = [...data].sort((a, b) => b.id - a.id);

  const todayNews = sortedNews.slice(0, 2);

  const beforeNews = sortedNews.slice(2);

  return (
    <div className="bg-grey-300 min-w-[100vw] min-h-[100vh]">
      <Header name="김시연" />
      <main className="min-w-full min-h-full py-[2.375rem] px-[3.75rem] flex flex-col gap-[4.0625rem]">
        <section className="flex flex-col gap-4">
          <p className="text-h3 text-grey-1200 font-semibold">오늘의 뉴스</p>
          <section className="flex justify-between gap-6">
            {todayNews.map((news: GetUserAllNews) => (
              <article
                className="w-full"
                key={news.id}
                onClick={() => handleClick(news)}
              >
                <NewsBig
                  title={news.title}
                  description={news.content}
                  date={`${news.date} ${news.time}`}
                />
              </article>
            ))}
          </section>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-h3 text-grey-1200 font-semibold">이전 뉴스</p>
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-5">
            {beforeNews.map((news: GetUserAllNews) => (
              <article key={news.id} onClick={() => handleClick(news)}>
                <NewsSmall
                  title={news.title}
                  description={news.content}
                  date={`${news.date} ${news.time}`}
                />
              </article>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default Page;
