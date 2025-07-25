"use client";

import Logo from "@/assets/Logo";
import BellIcon from "./BellIcon";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
import { useUserDelete } from "@/hooks/useUserDelete";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { formatNumberWithCommas } from "@/utils/numberFomat";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("");
  const [isLogin] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const NavContents = [
    { id: 1, content: "주식", url: "/stock" },
    { id: 2, content: "아이템", url: "/item" },
    { id: 3, content: "뉴스", url: "/news" },
    { id: 4, content: "랭킹", url: "/ranking" },
    { id: 5, content: "마이 페이지", url: "/mypage" },
    { id: 6, content: "MATCH", url: "/match" },
  ];

  const AdminNavContests = [
    { id: 1, content: "어드민 페이지", url: "/admin" },
    { id: 2, content: "MATCH", url: "/match" },
  ];

  const isAdminPage = pathname.startsWith("/admin");
  const navList = isAdminPage ? AdminNavContests : NavContents;
  const [name, setName] = useState<string | null>(null);
  const { mutate: logout } = useLogout();
  const { mutate: userDelete } = useUserDelete();
  const { data: userInfo } = useGetUserInfo();
  const currentMoney = userInfo?.money || 0;
  useEffect(() => {
    if (typeof window !== "undefined" && userInfo?.money != null) {
      localStorage.setItem("money", userInfo.money.toString());
    }
  }, [userInfo?.money]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const nicknameFromStorage = localStorage.getItem("nickname");
      setName(nicknameFromStorage);
    }
  }, []);

  useEffect(() => {
    const matched = navList.find((nav) => pathname.startsWith(nav.url));
    if (matched) {
      setSelectedTab(matched.content);
    }
  }, [pathname, navList]);

  return (
    <main className="relative w-full flex-col px-16 bg-white">
      <div className="flex justify-between py-3.5">
        <figure onClick={() => router.push("/stock")}>
          <Logo />
        </figure>
        <div className="relative flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-grey-700 font-regular text-p1">
              현재 내 자산
            </span>
            <span className="text-primary">
              {formatNumberWithCommas(currentMoney)}
            </span>
          </div>
          {isLogin ? (
            <>
              <BellIcon hasNotification={true} />
              <div className="relative">
                <span
                  className="text-grey-700 text-p1 font-regular cursor-pointer"
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  {name} 님
                </span>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 bg-white border shadow-md z-10 rounded-2xl border-grey-500">
                    <button
                      className="whitespace-nowrap px-6 py-3 text-p1 text-grey-800"
                      onClick={() => router.push("/setname")}
                    >
                      닉네임 및 캐릭터 수정
                    </button>
                    <button
                      className="whitespace-nowrap px-6 py-3 text-p1 text-grey-800"
                      onClick={() => logout()}
                    >
                      로그아웃
                    </button>
                    <button
                      className="whitespace-nowrap px-6 py-3 text-p1 text-grey-800"
                      onClick={() => userDelete()}
                    >
                      회원 탈퇴
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <span className="text-p1 font-[regular] text-primary cursor-pointer">
              로그인
            </span>
          )}
        </div>
      </div>

      <div className="flex pt-1.5">
        {navList.map((item) => (
          <button
            key={item.id}
            onClick={() => router.push(item.url)}
            className={`text-p1 font-[medium] px-3 pb-2 relative ${
              selectedTab === item.content ? "text-grey-1200" : "text-grey-700"
            }`}
          >
            {item.content}
            {selectedTab === item.content && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-primary" />
            )}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Header;
