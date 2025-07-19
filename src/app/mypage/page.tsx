"use client";

import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ItemExplan from "@/components/ItemExplan";
import LeftArrowIcon from "@/assets/LeftArrowIcon";
import RightArrowIcon from "@/assets/RightArrowIcon";
import MyTransaction from "@/components/MyTransaction";
import SmallButton from "@/components/SmallButton";
import { accessoriesDate } from "@/data/accessories";
import { clothesData } from "@/data/clothes";
import { initializeEquipment } from "@/utils/initAvatarState";
import BoyNomal from "@/assets/characters/boyNomal.png";
import GirlNomal from "@/assets/characters/girlNomal.png";
import { formatNumberWithCommas } from "@/utils/numberFomat";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { useUpdateItem } from "@/hooks/useUpdateItem";

const Page = () => {
  const { data: userInfo } = useGetUserInfo();

  const [clothesIndex, setClothesIndex] = useState(0);
  const [accessoryIndex, setAccessoryIndex] = useState(0);
  const [equippedClothes, setEquippedClothes] = useState<string | null>(null);
  const [equippedAccessory, setEquippedAccessory] = useState<string | null>(
    null,
  );
  const [gender, setGender] = useState<"man" | "woman" | null>(null);
  const { mutate: updateItem } = useUpdateItem();

  useEffect(() => {
    const storedGender = localStorage.getItem("gender");
    if (storedGender === "man" || storedGender === "woman") {
      setGender(storedGender);
    }
  }, []);

  const ITEMS_PER_PAGE = 3;

  const handleSlide = (
    type: "clothes" | "accessory",
    direction: "prev" | "next",
  ) => {
    const detailList =
      type === "clothes"
        ? userInfo?.clothes || []
        : userInfo?.accessories || [];

    const currentIndex = type === "clothes" ? clothesIndex : accessoryIndex;

    const newIndex =
      direction === "prev"
        ? Math.max(currentIndex - ITEMS_PER_PAGE, 0)
        : Math.min(
            currentIndex + ITEMS_PER_PAGE,
            detailList.length - ITEMS_PER_PAGE,
          );

    if (type === "clothes") {
      setClothesIndex(newIndex);
    } else {
      setAccessoryIndex(newIndex);
    }
  };

  const handleEquip = (category: "clothes" | "accessory", name: string) => {
    if (category === "clothes") {
      setEquippedClothes(name);
    } else {
      setEquippedAccessory(name);
    }
  };

  const DEFAULT_CLOTHES = "기본 옷";
  const handleUnequip = (category: "clothes" | "accessory") => {
    if (category === "clothes") {
      setEquippedClothes(DEFAULT_CLOTHES);
    } else {
      setEquippedAccessory(null);
    }
  };

  const handleSave = () => {
    if (!userInfo) return;

    updateItem(
      {
        clothes: equippedClothes === "기본 옷" ? "" : equippedClothes || "",
        accessories: equippedAccessory || "",
      },
      {
        onSuccess: () => {
          alert("장착 정보가 저장되었습니다.");
        },
        onError: () => {
          alert("저장에 실패했습니다. 다시 시도해주세요.");
        },
      },
    );
  };

  useEffect(() => {
    if (userInfo) {
      const defaultClothes = userInfo.clothes?.find((item) => item.wear)?.name;
      const defaultAccessory = userInfo.accessories?.find(
        (item) => item.wear,
      )?.name;

      const isAllClothesUnworn = userInfo.clothes?.every((item) => !item.wear);

      initializeEquipment(
        {
          clothes: isAllClothesUnworn ? "기본 옷" : defaultClothes || "",
          accessory: defaultAccessory || "",
        },
        setEquippedClothes,
        setEquippedAccessory,
      );
    }
  }, [userInfo]);

  return (
    <div className="w-full min-h-[100vh] flex flex-col bg-grey-300">
      <Header />
      <main className="py-[95px] px-[104px] gap-20">
        <section className="flex flex-col items-center gap-20">
          <section className="flex relative">
            <Image
              src={gender === "woman" ? GirlNomal : BoyNomal}
              alt={gender === "woman" ? "Girl" : "Boy"}
            />
            {equippedClothes && (
              <Image
                src={
                  clothesData.find((c) => c.name === equippedClothes)?.image ||
                  ""
                }
                alt="clothes"
                className="absolute top-0 left-0 z-10"
              />
            )}
            {equippedAccessory && (
              <Image
                src={
                  accessoriesDate.find((a) => a.name === equippedAccessory)
                    ?.image || ""
                }
                alt="accessory"
                className="absolute top-0 left-0 z-20"
              />
            )}
            <figure className="absolute top-64 right-0">
              <SmallButton
                text="저장"
                colorType="primary"
                onClick={handleSave}
              />
            </figure>

            <figure className="flex flex-col justify-center">
              <p className="text-h3 font-semibold text-black pb-3">
                {userInfo?.nickname || "닉네임"}
              </p>
              <figure className="flex gap-3 text-h4 font-semibold pb-1">
                <p className="text-grey-1100">내 자산</p>
                <p className="text-primary">
                  {userInfo ? formatNumberWithCommas(userInfo.money) : 0}
                </p>
              </figure>
            </figure>
          </section>

          <section className="flex flex-col gap-20 w-full">
            {/* Clothes Section */}
            <section className="flex flex-col w-full items-center">
              <figure className="flex flex-col w-fit gap-4">
                <figure className="flex w-full">
                  <p className="text-h3 text-grey-1200 font-semibold">
                    구매한 의상
                  </p>
                  <figure className="flex ml-auto">
                    <button onClick={() => handleSlide("clothes", "prev")}>
                      <LeftArrowIcon />
                    </button>
                    <button onClick={() => handleSlide("clothes", "next")}>
                      <RightArrowIcon />
                    </button>
                  </figure>
                </figure>
                <div className="flex items-center gap-2">
                  <div className="flex gap-4 overflow-hidden">
                    {(userInfo?.clothes || [])
                      .slice(clothesIndex, clothesIndex + ITEMS_PER_PAGE)
                      .map((item) => (
                        <ItemExplan
                          key={item.id}
                          category="clothes"
                          name={item.name}
                          isMine={true}
                          onClose={() => {}}
                          onEquip={handleEquip}
                          onUnequip={handleUnequip}
                          equippedItem={equippedClothes}
                        />
                      ))}
                  </div>
                </div>
              </figure>
            </section>

            {/* Accessories Section */}
            <section className="flex flex-col w-full items-center">
              <figure className="flex flex-col w-fit gap-4">
                <figure className="flex w-full">
                  <p className="text-h3 text-grey-1200 font-semibold">
                    구매한 악세서리
                  </p>
                  <figure className="flex ml-auto">
                    <button onClick={() => handleSlide("accessory", "prev")}>
                      <LeftArrowIcon />
                    </button>
                    <button onClick={() => handleSlide("accessory", "next")}>
                      <RightArrowIcon />
                    </button>
                  </figure>
                </figure>
                <div className="flex items-center gap-2">
                  <div className="flex gap-4 overflow-hidden">
                    {(userInfo?.accessories || [])
                      .slice(accessoryIndex, accessoryIndex + ITEMS_PER_PAGE)
                      .map((item) => (
                        <ItemExplan
                          key={item.id}
                          category="accessory"
                          name={item.name}
                          isMine={true}
                          onClose={() => {}}
                          onEquip={handleEquip}
                          onUnequip={handleUnequip}
                          equippedItem={equippedAccessory}
                        />
                      ))}
                  </div>
                </div>
              </figure>
            </section>

            {/* Coin Transaction Section */}
            <section className="flex flex-col w-full justify-center items-center">
              <figure className="flex flex-col items-center justify-center gap-4 w-fit">
                <figure className="flex w-full ">
                  <p className="text-h3 text-grey-1200 font-semibold">
                    거래내역
                  </p>
                </figure>
                <div className="grid grid-cols-2 gap-x-48">
                  {(userInfo?.coins || []).map((coin) => (
                    <MyTransaction
                      key={coin.id}
                      type={parseFloat(coin.price) > 0 ? "매도" : "매수"}
                      label={coin.coinName}
                      amount={coin.price}
                      date={coin.date.split("T")[0]}
                      period={`${coin.nowAmount}주`}
                    />
                  ))}
                </div>
              </figure>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Page;
