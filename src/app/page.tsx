"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BsmLogo from "@/assets/BsmLogo";
import Logo from "@/assets/Logo";
import CloseIcon from "@/assets/CloseIcon";
import SmallButton from "@/components/SmallButton";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    router.push("/main");
  };

  return (
    <main className="w-[100vw] h-[100vh] flex justify-center items-center relative">
      <article className="flex items-center gap-[12.5rem] z-10">
        <figure className="flex flex-col gap-6">
          <Logo width={122} height={72} />
          <p className="text-h4 text-grey-1000 font-semibold">
            뉴스 기반 가상 투자 시뮬레이션 게임
            <br />
            <span className="text-primary">BRICK</span>에 오신 걸 환영합니다!
          </p>
        </figure>
        <figure className="flex flex-col gap-3">
          <figure className="flex justify-center w-[22.5rem] py-[0.6875rem] gap-[0.6875rem] border border-grey-500 rounded-lg cursor-pointer">
            <BsmLogo />
            <p className="text-p2 text-grey-1100 font-regular">
              BSM으로 계속하기
            </p>
          </figure>
          <figure
            className="w-[22.5rem] py-[0.6875rem] border border-grey-500 rounded-lg text-center cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <p className="text-p2 text-grey-1100 font-regular">
              로그인 없이 계속하기
            </p>
          </figure>
        </figure>
      </article>

      {isModalOpen && (
        <main className="absolute top-0 left-0 w-full h-full bg-[rgba(39,39,39,0.2)] backdrop-blur-sm flex justify-center items-center z-20">
          <article className="flex flex-col gap-[7.25rem] w-[35rem] p-[2.125rem] rounded-lg bg-white z-10">
            <figure className="flex flex-col gap-3">
              <figure className="flex justify-between items-center">
                <p className="text-h3 text-grey-1200 font-semibold">
                  게스트로 이용하시겠습니까?
                </p>
                <button onClick={() => setIsModalOpen(false)}>
                  <CloseIcon />
                </button>
              </figure>
              <figure className="text-p2 text-grey-1000 font-regular">
                <p>로그인을 하지 않으면 랭킹에 자신이 보이지 않습니다.</p>
                <p>그래도 계속하시겠습니까?</p>
              </figure>
            </figure>
            <figure className="ml-auto flex gap-4">
              <SmallButton
                text="취소"
                colorType="transparent"
                onClick={() => setIsModalOpen(false)}
              />
              <SmallButton
                text="계속하기"
                colorType="primary"
                onClick={handleContinue}
              />
            </figure>
          </article>
        </main>
      )}
    </main>
  );
};

export default Home;
