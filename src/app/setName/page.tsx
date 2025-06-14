"use client";

import Logo from "@/assets/Logo";
import SmallButton from "@/components/SmallButton";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleGoChooseCharacter = () => {
    if (!inputValue.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    router.push("/set-char");
  };

  return (
    <main className="w-[100vw] h-[100vh] flex justify-center items-center">
      <article className="flex items-center gap-[12.5rem] z-10">
        <figure className="flex flex-col gap-6">
          <Logo width={122} height={72} />
          <p className="text-h4 text-grey-1000 font-semibold">
            뉴스 기반 가상 투자 시뮬레이션 게임
            <br />
            <span className="text-primary">BRICK</span>에 오신 걸 환영합니다!
          </p>
        </figure>
        <figure className="flex flex-col gap-[1.4375rem]">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="ex) 테일러팜스푸룬주스CTO김시연"
            className="w-[22.5rem] border border-grey-500 rounded-lg py-[0.6875rem] px-4 text-p2 font-regular placeholder:text-grey-600 focus:outline-none focus:ring-0 focus:border-grey-500"
          />
          <figure className="ml-auto">
            <SmallButton
              text="다음으로"
              colorType="primary"
              onClick={handleGoChooseCharacter}
            />
          </figure>
        </figure>
      </article>
    </main>
  );
};

export default Page;
