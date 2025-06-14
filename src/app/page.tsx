import BsmLogo from "@/assets/BsmLogo";
import Logo from "@/assets/Logo";

const Home = () => {
  return (
    <main className="w-[100vw] h-[100vh] flex justify-center items-center">
      <article className="flex items-center gap-[12.5rem]">
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
          <figure className="w-[22.5rem] py-[0.6875rem] border border-grey-500 rounded-lg text-center cursor-pointer">
            <p className="text-p2 text-grey-1100 font-regular">
              로그인 없이 계속하기
            </p>
          </figure>
        </figure>
      </article>
    </main>
  );
};

export default Home;
