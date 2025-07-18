"use client";

import Logo from "@/assets/Logo";
import SmallButton from "@/components/SmallButton";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Boy from "@/assets/characters/boy.png";
import Girl from "@/assets/characters/girl.png";
import Image, { StaticImageData } from "next/image";
import { useUpdateUserDetail } from "@/hooks/useUpdateUserDetail";

interface CharacterCardProps {
  name: "man" | "woman";
  src: StaticImageData;
  selected: boolean;
  onClick: () => void;
}

const CharacterCard = ({
  name,
  src,
  selected,
  onClick,
}: CharacterCardProps) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      {selected && (
        <div
          className="absolute inset-0 m-auto w-[190px] h-[190px] rounded-full bg-[rgba(4,199,176,0.15)] z-0"
          style={{ filter: "blur(5px)" }}
        />
      )}
      <Image src={src} alt={`${name} character`} className="relative z-10" />
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<"man" | "woman" | null>(null);
  const [nickname, setNickname] = useState<string | null>(null);
  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    setNickname(storedNickname);
  }, []);
  const { mutate } = useUpdateUserDetail();

  const handleChooseUserDetail = async () => {
    if (!selected) {
      alert("캐릭터의 성별을 선택해주세요.");
      return;
    }

    if (!nickname) {
      alert("닉네임이 없습니다. 다시 닉네임을 설정해주세요.");
      router.push("/setname");
      return;
    }

    mutate(
      { nickname, gender: selected },
      {
        onSuccess: () => {
          router.push("/stock");
          console.log("성공");
          localStorage.setItem("gender", selected);
        },
        onError: () => {
          alert("캐릭터의 성별을 선택해주세요.");
        },
      },
    );
  };

  return (
    <main className="w-[100vw] h-[100vh] flex justify-center items-center">
      <article className="flex items-center gap-[8.75rem] z-10">
        <figure className="flex flex-col gap-6">
          <Logo width={122} height={72} />
          <p className="text-h4 text-grey-1000 font-semibold">
            뉴스 기반 가상 투자 시뮬레이션 게임
            <br />
            <span className="text-primary">BRICK</span>에 오신 걸 환영합니다!
          </p>
        </figure>
        <figure className="flex flex-col gap-6">
          <figure className="flex gap-5">
            <CharacterCard
              name="man"
              src={Boy}
              selected={selected === "man"}
              onClick={() => setSelected("man")}
            />
            <CharacterCard
              name="woman"
              src={Girl}
              selected={selected === "woman"}
              onClick={() => setSelected("woman")}
            />
          </figure>
          <figure className="ml-auto">
            <SmallButton
              text="완료하기"
              colorType="primary"
              onClick={handleChooseUserDetail}
            />
          </figure>
        </figure>
      </article>
    </main>
  );
};

export default Page;
