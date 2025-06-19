"use client";

import Header from "@/components/Header";
import NewsBig from "@/components/NewsBig";
import NewsSmall from "@/components/NewsSmall";
import { useRouter } from "next/navigation";
import React from "react";

const newsData = [
  {
    id: 1,
    title: `[단독] 송윤서 충격 고백..! "사실 남자다" 눈물의 기자회견`,
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었다. 논란을 잠재우기 위해 그녀가 병원으로 출두했다. 검사 후 충격적인 결과가 발표되었다. 그녀가 남자라는 소식이다.  이...",
    date: "2025.04.02",
  },
  {
    id: 2,
    title: "[디스패치] 인플루언서 시연 킴, 푸룬 주스 마시고 광명 찾다 ",
    description:
      "푸룬주스 마시고 신세계를 경혐했다는 소식을 전했다. 그녀는 다시 행복한 미소를 되찾았다. 하지만 주변에 소식을 알리자 주변 사람들 기겁하며 도망을 갔다 전해진다. 그녀의 쾌변 소식을 모두가 축하...",
    date: "2025.04.02",
  },
];

const beforeNews = [
  {
    id: 1,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 2,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 3,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 4,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 5,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 6,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 7,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 8,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 9,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 10,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
  {
    id: 11,
    title: "[단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견",
    description:
      "그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이 되었...",
    date: "2025.04.02",
  },
];

const Page = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/news/${id}`);
  };
  return (
    <div className="bg-grey-300">
      <Header name="김시연" />
      <main className="py-[2.375rem] px-[3.75rem] flex flex-col gap-[4.0625rem]">
        <section className="flex flex-col gap-4">
          <p className="text-h3 text-grey-1200 font-semibold">오늘의 뉴스</p>
          <section className="flex justify-between gap-6">
            {newsData.map((data) => (
              <article key={data.id} onClick={() => handleClick(data.id)}>
                <NewsBig
                  title={data.title}
                  description={data.description}
                  date={data.date}
                />
              </article>
            ))}
          </section>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-h3 text-grey-1200 font-semibold">이전 뉴스</p>
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-5">
            {beforeNews.map((data) => (
              <article key={data.id} onClick={() => handleClick(data.id)}>
                <NewsSmall
                  title={data.title}
                  description={data.description}
                  date={data.date}
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
