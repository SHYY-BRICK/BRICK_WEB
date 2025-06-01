import MUS from "@/assets/clothes/강시우의 NUS 옷.png";
import Devloper from "@/assets/clothes/개발자룩.png";
import Adidas from "@/assets/clothes/건우쌤의 아디다스 세트.png";
import SchoolJumper from "@/assets/clothes/과잠.png";
import SchoolPants from "@/assets/clothes/교복 바지.png";
import SchoolSkirt from "@/assets/clothes/교복 치마.png";
import Apron from "@/assets/clothes/급식실 앞치마.png";
import Default from "@/assets/clothes/기본 옷.png";
import Poop from "@/assets/clothes/김시연의 똥 옷.png";
import BubbleGum from "@/assets/clothes/김예진의 버블검 옷.png";
import YellowWorkout from "@/assets/clothes/노랑 체육복.png";
import ManToMan from "@/assets/clothes/맨투맨.png";
import HealthRoomGown from "@/assets/clothes/보건실 가운.png";
import RedWorkout from "@/assets/clothes/빨강 체육복.png";
import Devil from "@/assets/clothes/악마옷.png";
import ManOldSchoolUniform from "@/assets/clothes/옛날 남자 교복.png";
import WomanOldSchoolUniform from "@/assets/clothes/옛날 여자 교복.png";
import OnePiece from "@/assets/clothes/원피스.png";
import WeddingDress from "@/assets/clothes/웨딩드레스.png";
import NuldyJersey from "@/assets/clothes/이민준의 널디 져지.png";
import POTCShortRobe from "@/assets/clothes/정수환의 POTC 군복.png";
import Suit from "@/assets/clothes/정장.png";
import angel from "@/assets/clothes/천사옷.png";
import BlueWorkout from "@/assets/clothes/파랑 체육복.png";
import Mario from "@/assets/clothes/한태영의 마리오 옷.png";
import Hoodie from "@/assets/clothes/후드티.png";
import WhiteTJeans from "@/assets/clothes/흰티 청바지.png";

export const clothesData = [
  // 노멀
  {
    id: 1,
    name: "흰티 청바지",
    image: WhiteTJeans,
    info: "생각보다 어울리기 힘든 옷이다.",
    rank: "노멀(60퍼센트의 확률)",
  },
  {
    id: 2,
    name: "개발자룩",
    image: Devloper,
    info: "구글에 갈 수 있을 것 같다.",
    rank: "노멀(60퍼센트의 확률)",
  },

  {
    id: 3,
    name: "노랑 체육복",
    image: YellowWorkout,
    info: "3년 동안 가장 많이 입는 옷이다. ",
    rank: "노멀(60퍼센트의 확률)",
  },
  {
    id: 4,
    name: "빨강 체육복",
    image: RedWorkout,
    info: "3년 동안 가장 많이 입는 옷이다. ",
    rank: "노멀(60퍼센트의 확률)",
  },
  {
    id: 5,
    name: "파랑 체육복",
    image: BlueWorkout,
    info: "3년 동안 가장 많이 입는 옷이다. ",
    rank: "노멀(60퍼센트의 확률)",
  },
  {
    id: 6,
    name: "맨투맨",
    image: ManToMan,
    info: "걍 무난하다.",
    rank: "노멀(60퍼센트의 확률)",
  },
  {
    id: 7,
    name: "원피스",
    image: OnePiece,
    info: "예뿌다.",
    rank: "노멀(60퍼센트의 확률)",
  },
  {
    id: 8,
    name: "학교점퍼",
    image: SchoolJumper,
    info: "겨울에 흔히 보이는 패션이다.",
    rank: "노멀(60퍼센트의 확률)",
  },
  // 레어
  {
    id: 9,
    name: "후드티",
    image: Hoodie,
    info: "체크셔츠에 이어 개발자에게 사랑받는 옷이다. ",
    rank: "레어(30퍼센트의 확률)",
  },
  {
    id: 10,
    name: "정장",
    image: Suit,
    info: "어떤 면접이든 합격할 것 같다.",
    rank: "레어(30퍼센트의 확률)",
  },
  {
    id: 11,
    name: "교복 바지",
    image: SchoolPants,
    info: "선생님에게 사랑 받을 것 같다.",
    rank: "레어(30퍼센트의 확률)",
  },
  {
    id: 12,
    name: "교복 치마",
    image: SchoolSkirt,
    info: "선생님에게 사랑 받을 것 같다.",
    rank: "레어(30퍼센트의 확률)",
  },
  {
    id: 13,
    name: "급식실 앞치마",
    image: Apron,
    info: "빼먹으면 영양사 선생님이 찾아온다는 소문이 있다.",
    rank: "레어(30퍼센트의 확률)",
  },
  {
    id: 14,
    name: "보건실 가운",
    image: HealthRoomGown,
    info: "막상 보건선생님은 안 입으시는 것 같다.",
    rank: "레어(30퍼센트의 확률)",
  },
  // 에픽
  {
    id: 15,
    name: "이민준의 널디 져지",
    image: NuldyJersey,
    info: "이민준의 스웩이 생길 수 있다.",
    rank: "에픽(8%의 확률!)",
  },
  {
    id: 16,
    name: "천사옷",
    image: angel,
    info: "착한 인간이 된것 같은 느낌을 느낄 수 있다.",
    rank: "에픽(8%의 확률!)",
  },
  {
    id: 17,
    name: "악마옷",
    image: Devil,
    info: "크크. 나는 아쿠마닷!",
    rank: "에픽(8%의 확률!",
  },
  {
    id: 18,
    name: "건우쌤의 아디다스 세트",
    image: Adidas,
    info: "부럽다… 나도 갖고싶다….",
    rank: "에픽(8%의 확률)!",
  },
  {
    id: 19,
    name: "웨딩드레스",
    image: WeddingDress,
    info: "축하한다.",
    rank: "에픽(8%의 확률)!",
  },
  {
    id: 20,
    name: "옛날 남자 교복",
    image: ManOldSchoolUniform,
    info: "관식이가 되었다.",
    rank: "에픽(8%의 확률)!",
  },
  {
    id: 21,
    name: "옛날 여자 교복",
    image: WomanOldSchoolUniform,
    info: "애순이가 되었다.",
    rank: "에픽(8%의 확률)!",
  },
  // 레전드
  {
    id: 22,
    name: "김시연의 똥 옷",
    image: Poop,
    info: "다행히 냄새나진 않는다. ",
    rank: "레전드(2퍼센트의 확률!)",
  },
  {
    id: 23,
    name: "김예진의 버블검 옷",
    image: BubbleGum,
    info: "뉴진스가 될 수 있다.",
    rank: "레전드(2퍼센트의 확률!)",
  },
  {
    id: 24,
    name: "정수환의 POTC 군복",
    image: POTCShortRobe,
    info: "POTC가 가고싶다면 그를 찾아가자",
    rank: "레전드(2퍼센트의 확률!)",
  },
  {
    id: 25,
    name: "한태영의 마리오 옷",
    image: Mario,
    info: "높게 점프할 수 있을 것만 같다.",
    rank: "레전드(2퍼센트의 확률!)",
  },
  {
    id: 26,
    name: "강시우의 NUS 옷",
    image: MUS,
    info: "영어를 잘 할 수 있을 것 같다.",
    rank: "노멀(60퍼센트의 확률)",
  },
  // 기본
  {
    id: 27,
    name: "기본 옷",
    image: Default,
    info: "",
    rank: "없다.",
  },
];
