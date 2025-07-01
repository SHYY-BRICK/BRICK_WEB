"use client";

import CloseIcon from "@/assets/CloseIcon";
import React, { useState } from "react";
import SmallButton from "./SmallButton";

interface Props {
  onClose: () => void;
}

const NewsPublish = ({ onClose }: Props) => {
  const [selectedTime, setSelectedTime] = useState<"am" | "pm" | null>(null);

  const isSelected = (time: "am" | "pm") => selectedTime === time;

  return (
    <main className="flex flex-col w-[35rem] p-[2.1rem] gap-9 rounded-lg bg-white">
      <header className="flex w-full justify-between items-center">
        <p className="text-h3 text-grey-1200 font-semibold">뉴스 출판일 설정</p>
        <figure className="cursor-pointer" onClick={onClose}>
          <CloseIcon />
        </figure>
      </header>

      <article className="flex flex-col gap-1">
        <p className="text-p2 text-grey-1000">출판 날짜 (8자리)</p>
        <input
          className="h-11 rounded-[0.25rem] py-[0.875rem] px-2 text-p2 text-grey-1000 border border-grey-400 placeholder:text-grey-600"
          type="date"
          placeholder="0000 / 00 / 00"
        />
      </article>

      <article className="flex flex-col gap-1">
        <p className="text-p2 text-grey-1000">출판 시간</p>
        <figure className="flex w-full gap-3">
          <button
            onClick={() => setSelectedTime("am")}
            className={`w-full py-1 text-p1 rounded-lg border ${
              isSelected("am")
                ? "bg-primary text-white border-primary"
                : "bg-transparent text-grey-600 border-grey-400"
            }`}
          >
            오전
          </button>
          <button
            onClick={() => setSelectedTime("pm")}
            className={`w-full py-1 text-p1 rounded-lg border ${
              isSelected("pm")
                ? "bg-primary text-white border-primary"
                : "bg-transparent text-grey-600 border-grey-400"
            }`}
          >
            오후
          </button>
        </figure>
      </article>

      <article className="ml-auto flex gap-4">
        <SmallButton text="취소" colorType="transparent" onClick={onClose} />
        <SmallButton text="완료하기" colorType="primary" />
      </article>
    </main>
  );
};

export default NewsPublish;
