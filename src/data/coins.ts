import Brick from "@/assets/coins/Brick";
import Bubble from "@/assets/coins/Bubble";
import Buma from "@/assets/coins/Buma";
import Fla from "@/assets/coins/Fla";
import Ioj from "@/assets/coins/Ioj";
import Maru from "@/assets/coins/Maru";
import Match from "@/assets/coins/Match";
import Space from "@/assets/coins/Space";
import Teachmon from "@/assets/coins/Teachmon";
import Tina from "@/assets/coins/Tina";
import { ComponentType } from "react";

type Coin = {
  id: number;
  label: string;
  name: string;
  image: ComponentType | null;
  mainInfo: string;
  info?: string;
};

export const coins: Coin[] = [
  {
    id: 1,
    label: "BRICK",
    name: "BRICK (BRK)",
    image: Brick,
    mainInfo: "[BRICK의 기본 화폐]",
  },
  {
    id: 2,
    label: "마루",
    name: "마루 (MRU)",
    image: Maru,
    mainInfo: "[부산소프트웨어마이스터고등학교 입학전형 플랫폼]",
    info: "기존에 파편화된 정보의 접근성과 원서 접수 편의성 문제를 해결하기 위해 개발된 플랫폼입니다. 단순히 원서 접수 기능을 넘어, 학생과 선생님 모두의 입학 전형 경험을 고려한 사용자 중심 설계를 하였습니다.",
  },
  {
    id: 3,
    label: "SPACE",
    name: "space (SPC)",
    image: Space,
    mainInfo:
      "[우주 컨셉의 AI 기반 서비스로, 어린아이들의 문제 해결 능력을 아기자기한 인터랙션을 통한 훈련 서비스]",
    info: "SPACE는 우주 여행을 테마로 한 AI 서비스로, 어린아이들이 아기자기한 그래픽과 인터랙티브한 활동을 통해 문제 해결 능력을 키울 수 있도록 돕습니다. 퀴즈, 퍼즐, 탐험 미션을 통해 논리적 사고와 창의력을 자연스럽게 길러줍니다.",
  },
  {
    id: 4,
    label: "IOJ",
    name: "IOJ (IOJ)",
    image: Ioj,
    mainInfo: "[실시간 아이템전을 통해 게임처럼 즐기는 알고리즘 대결 서비스]",
    info: "실시간 아이템전을 통해 게임처럼 즐기는 알고리즘 대결 플랫폼, IOJ는 코딩 학습에 게임 요소를 도입해 몰입도 높은 학습 경험을 제공합니다. 높은 진입 장벽과 지루한 학습 방식으로 코딩을 포기하는 문제를 해결하고자, 즐거운 경쟁 환경 속에서 자연스럽게 코딩 실력을 키울 수 있도록 기획되었습니다.",
  },
  {
    id: 5,
    label: "하프",
    name: "하프 (HAP)",
    image: null,
    mainInfo:
      "[사용자가 손쉽게 여행 일정을 작성하고 관리할 수 있도록 돕는 AI 기반의 여행 계획 도우미]",
    info: "여행지를 검색하고 평가를 비교하는 번거로운 과정 없이, AI와 친근하게 대화하며 사용자의 취향과 목적에 맞는 최적의 장소들을 자동으로 추천하고, 전체 여행 일정을 효율적으로 구성해 줍니다.",
  },
  {
    id: 6,
    label: "부마위키",
    name: "부마위키 (BWK)",
    image: Buma,
    mainInfo: "[학생들을 위한 교내 위키 서비스]",
    info: "부산소마고의 학생, 선생님, 사건/사고 등의 역사를 기록하는 위키 서비스입니다.",
  },
  {
    id: 7,
    label: "티치몬",
    name: "티치몬 (TCM)",
    image: Teachmon,
    mainInfo: "[자습감독 관리와 방과후 학생 관리를 간편하게 해주는 플랫폼]",
    info: "기존 순수 진행하던 자습감독 배정을 알고리즘을 통해 자동으로 배정할 수 있습니다. 방과후 학생관리를 할 때 학생들의 상태를 한눈에 보기 쉽게 표시해주고, 지도로 학생의 위치를 파악할 수 있습니다.",
  },
  {
    id: 8,
    label: "티나",
    name: "티나 (TNA)",
    image: Tina,
    mainInfo:
      "[MBTI 기반 대화 내용 AI 감정 분석으로 상대방의 속마음을 읽는 서비스]",
    info: "티나는 사용자가 친구, 연인, 관심 있는 사람과의 대화 내용을 분석하여 상대방의 감정을 예측하고, 그 사람의 나에 대한 감정 상태를 AI로 분석하는 앱입니다. 사용자가 입력한 대화 내용, 행동 패턴, 그리고 상대방과의 상호작용을 기반으로 MBTI 분석을 통해 감정 상태와 관계 발전 가능성을 시각적으로 예측합니다.",
  },
  {
    id: 9,
    label: "FLA",
    name: "FLA (FLA)",
    image: Fla,
    mainInfo: "[인프라 관리를 위한 AI 기반 통합 모니터링 및 자동화 플랫폼]",
    info: "네트워크, 보안, 서버를 아우르는 통합 IT 관리 환경을 제공하며, AI 기반 이상 탐지와 예측 분석으로 문제를 사전에 해결합니다. 직관적인 대시보드와 자동화로 운영 효율성을 극대화합니다.",
  },
  {
    id: 10,
    label: "MATCH",
    name: "MATCH (MTC)",
    image: Match,
    mainInfo: "[체육대회를 더 재미있게, MATCH]",
    info: "POINT는 체육대회 경기 결과를 예측하고 포인트를 베팅하는 참여형 서비스입니다. 학생들은 결과를 맞히면 포인트를 얻고, 이를 상품으로 교환할 수 있어 체육대회를 더욱 흥미롭게 즐길 수 있습니다. 간단한 참여와 자동 정산 시스템으로 누구나 쉽게 이용할 수 있습니다.",
  },
  {
    id: 11,
    label: "버블",
    name: "버블 (BBB)",
    image: Bubble,
    mainInfo: "[교내 세탁실 관리 스마트 솔루션]",
    info: "Bubble은 기숙사 세탁기·건조기 사용을 효율적으로 도와주는 관리 서비스입니다. 예약 기능으로 줄 서는 번거로움을 줄이고, 완료 알림과 중복 예약 방지로 공정한 이용을 돕습니다.",
  },
];
