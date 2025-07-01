"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import NewsBig from "@/components/NewsBig";
import NewsPublish from "@/components/NewsPublish"; // 모달 import

const dummyNews = [
  {
    title: "[단독] 시연 킴, 하루 3번 푸룬 주스... 장 건강 선도주자?",
    description:
      "인플루언서 시연 킴이 푸룬 주스에 푹 빠졌다는 소식입니다. 전문가들은 '이 정도면 장의 여왕'이라는 찬사를 아끼지 않았다고 합니다.",
    date: "2025.04.01",
  },
  {
    title: "[속보] 푸룬 사재기 논란... 시연 킴 팬들 책임론 대두",
    description:
      "푸룬 주스 품귀현상이 전국적으로 발생했습니다. 일각에선 시연 킴의 팬들이 유통망을 흔들고 있다는 지적도 나옵니다.",
    date: "2025.04.01",
  },
  {
    title: "[기획] 푸룬 주스가 뭐길래? 시연 킴이 말하는 장의 기적",
    description:
      "푸룬 주스, 그냥 맛있는 음료수일까? 시연 킴의 인터뷰를 통해 푸룬 주스의 모든 것을 파헤쳐봤습니다.",
    date: "2025.03.31",
  },
  {
    title: "[현장] 팬미팅에서 ‘쾌변송’ 선보인 시연 킴... 현장 분위기 후끈",
    description:
      "쾌변송을 부른 시연 킴의 무대에 팬들은 ‘배가 편안해지는 느낌’이라며 뜨거운 호응을 보냈습니다.",
    date: "2025.03.30",
  },
  {
    title: "[단독] 시연 킴, 푸룬 농장과 전속 계약... 직접 키운다?",
    description:
      "푸룬 주스를 사랑한 그녀, 이제는 푸룬 농장주? 시연 킴이 전속 농장 운영에 직접 나설 전망입니다.",
    date: "2025.03.29",
  },
  {
    title: "[전문] 시연 킴, '푸룬 없인 못 살아'... SNS에 감동 장문글",
    description:
      "“내 삶의 방향을 바꾼 푸룬 주스”라며 그녀는 감격스런 마음을 글로 남겼고, 팬들은 ‘공감 100%’ 반응을 보였습니다.",
    date: "2025.03.28",
  },
];

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col bg-grey-300 w-[100vw] min-h-[100vh]">
      <Header name="김시연" />
      <main className="flex flex-col py-[38px] px-[60px] gap-4">
        <p className="text-h3 font-semibold text-grey-1200">검토해야할 뉴스</p>
        <section className="grid grid-cols-2 gap-x-6 gap-y-5">
          {dummyNews.map((news, idx) => (
            <NewsBig
              key={idx}
              title={news.title}
              description={news.description}
              date={news.date}
              publish
              onClickPublish={() => setShowModal(true)} // 🔥 출판 버튼 클릭 시 모달 ON
            />
          ))}
        </section>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(39,39,39,0.2)] backdrop-blur-sm">
          <NewsPublish onClose={() => setShowModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Page;
