import React from "react";

const CoinExplanation = () => {
  return (
    <main className="flex flex-col gap-2 w-[320px] p-4 border border-grey-300 rounded-2xl rounded-tr-none">
      <p className="text-caption font-medium text-primary">
        부산소프트웨어마이스터고등학교 입학전형 플랫폼
      </p>
      <p className="text-caption font-regular text-grey-1100">
        기존에 파편화된 정보의 접근성과 원서 접수 편의성 문제를 해결하기 위해
        개발된 플랫폼입니다. 단순히 원서 접수 기능을 넘어, 학생과 선생님 모두의
        입학 전형 경험을 고려한 사용자 중심 설계를 하였습니다.
      </p>
    </main>
  );
};

export default CoinExplanation;
