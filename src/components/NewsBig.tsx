import React from "react";
import SmallButton from "./SmallButton";

interface NewsBigProps {
  publish?: boolean;
}

const NewsBig = ({ publish = false }: NewsBigProps) => {
  return (
    <main className="relative flex gap-6 p-6 rounded-lg w-[40.5rem] border border-grey-300">
      <div className="w-[136px] h-[136px] bg-black" />
      <article className="flex flex-col gap-2">
        <p className="text-h5 text-grey-1200 font-semibold">
          [디스패치] 인플루언서 시연 킴, 푸룬 주스 마시고 광명 찾다
        </p>
        <p className="w-full text-p2 text-grey-700 font-regular">
          푸룬주스 마시고 신세계를 경험했다는 소식을 전했다. 그녀는 다시 행복한
          미소를 되찾았다. 하지만 주변에 소식을 알리자 주변 사람들 기겁하며
          도망을 갔다 전해진다. 그녀의 쾌변 소식을 모두가 축하...
        </p>
        <p className="text-caption font-regular text-grey-900">2025.04.02</p>
        {publish && (
          <div className="ml-auto">
            <SmallButton text="취소" colorType="transparent" />
            <SmallButton text="출판" colorType="primary" />
          </div>
        )}
      </article>
    </main>
  );
};

export default NewsBig;
