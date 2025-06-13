import React from "react";

const NewsSmall = () => {
  return (
    <main className="flex flex-col w-[19.5rem] rounded-xl p-6 gap-[0.5625rem]">
      <p className="text-h5 text-grey-1200 font-semibold">
        [단독] 송윤서 충격 고백..! 사실 남자였나... 눈물의 기자회견
      </p>
      <p className="text-p2 text-grey-700 font-regular">
        그가 나온 화장실의 변기 뚜껑이 열려있는 것을 그의 팬이 확인해 논란이
        되었다.
      </p>
      <p className="text-caption text-grey-900 font-medium">2025.04.02</p>
    </main>
  );
};

export default NewsSmall;
