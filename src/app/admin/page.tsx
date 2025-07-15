"use client";

import React from "react";
import Header from "@/components/Header";
import NewsBig from "@/components/NewsBig";
import { useRouter } from "next/navigation";
import { useGetAdminAllNews } from "@/hooks/useGetAdminAllNews";
import { GetAdminAllNews } from "@/types/apis.types";
import SmallButton from "@/components/SmallButton";
import { useUpdatePublish } from "@/hooks/useUpdatePublish";
import { usePostNews } from "@/hooks/usePostNews";

const Page = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetAdminAllNews();
  const { mutate: publishArticle } = useUpdatePublish();
  const { mutate: generateNews } = usePostNews();

  const handleClick = (news: GetAdminAllNews) => {
    const query = new URLSearchParams({
      title: news.title,
      content: news.content,
      date: news.date,
      time: news.time,
    }).toString();

    router.push(`/admin/${news.id}?${query}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg">
        뉴스 로딩 중...
      </div>
    );
  }

  if (isError || !data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-lg">
        뉴스를 불러오지 못했습니다.
      </div>
    );
  }

  const handleGenerateNews = () => {
    generateNews(undefined, {
      onSuccess: () => {
        alert("기사 생성이 완료되었습니다.");
        router.refresh();
      },
      onError: () => {
        alert("기사 생성에 실패했습니다.");
      },
    });
  };

  return (
    <div className="flex flex-col bg-grey-300 w-[100vw] min-h-[100vh]">
      <Header />
      <main className="flex flex-col py-[38px] px-[60px] gap-4">
        <header className="flex w-full justify-between">
          <p className="text-h3 font-semibold text-grey-1200">
            검토해야할 뉴스
          </p>
          <SmallButton
            text={"기사 생성"}
            colorType={"primary"}
            onClick={handleGenerateNews}
          />
        </header>
        <section className="grid grid-cols-2 gap-x-6 gap-y-5">
          {(data as GetAdminAllNews[]).map((news) => (
            <article
              className="cursor-pointer"
              key={news.id}
              onClick={() => handleClick(news)}
            >
              <NewsBig
                title={news.title}
                description={news.content}
                date={`${news.date} ${news.time}`}
                onClickPublish={() =>
                  publishArticle(
                    { articleId: news.id },
                    {
                      onSuccess: () => alert("출판 완료되었습니다."),
                      onError: () => alert("출판에 실패했습니다."),
                    },
                  )
                }
                publish
              />
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Page;
