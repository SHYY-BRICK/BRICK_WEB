"use client";

import EditIcon from "@/assets/EditIcon";
import LeftArrowIcon from "@/assets/LeftArrowIcon";
import BigButton from "@/components/BigButton";
import Header from "@/components/Header";
import React, { useState } from "react";

const Page = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  const [isEditing, setIsEditing] = useState(false);

  // 수정 가능한 상태들
  const [editableTitle, setEditableTitle] = useState(
    "[디스패치] 인플루언서 시연 킴, 푸룬 주스 마시고 광명 찾다.",
  );
  const [editableSubtitle, setEditableSubtitle] =
    useState("공포의 푸룬 주스 사건");
  const [editableContent, setEditableContent] = useState(
    "푸룬주스 마시고 신세계를 경혐했다는 소식을 전했다. 그녀는 다시 행복한 미소를 되찾았다. 하지만 주변에 소식을 알리자 주변 사람들 기겁하며 도망을 갔다고 전해진다. 그녀의 쾌변 소식을 모두가 축하해주는 날이 오기를 바란다.",
  );

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => setIsEditing(false);

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] bg-grey-300">
      <Header name="김시연" />
      <main className="flex flex-col w-[57.5rem] gap-8 py-[2.3125rem]">
        <header
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleBackClick}
        >
          <LeftArrowIcon />
          <p className="text-p1 text-grey-700 font-regular">돌아가기</p>
        </header>
        <section className="flex flex-col w-full py-12 px-[3.25rem] bg-white rounded-3xl gap-11">
          <article className="flex flex-col gap-2">
            {isEditing ? (
              <input
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="text-h2 font-bold text-grey-1200 w-full border-b border-grey-400 pb-2 focus:outline-none"
              />
            ) : (
              <p className="text-h2 text-grey-1200 font-bold">
                {editableTitle}
              </p>
            )}
            <figure className="flex justify-between">
              <p className="text-p3 text-grey-700 font-regular">
                2025.04.02 오전 9:15
              </p>
              {!isEditing && (
                <figure
                  className="flex gap-1 cursor-pointer"
                  onClick={handleEditClick}
                >
                  <p className="text-p3 text-primary font-regular">수정하기</p>
                  <EditIcon />
                </figure>
              )}
            </figure>
            <span className="w-full h-px bg-grey-500" />
          </article>
          <div className="w-full h-56 bg-black" />
          <article className="flex flex-col gap-5">
            <article className="flex items-start gap-[20px]">
              <span className="w-[0.125rem] h-full bg-primary" />
              {isEditing ? (
                <input
                  value={editableSubtitle}
                  onChange={(e) => setEditableSubtitle(e.target.value)}
                  className="text-h5 text-grey-1200 font-semibold py-1 border-b border-grey-400 w-full focus:outline-none"
                />
              ) : (
                <p className="py-1 text-h5 text-grey-1200 font-semibold">
                  {editableSubtitle}
                </p>
              )}
            </article>
            {isEditing ? (
              <textarea
                value={editableContent}
                onChange={(e) => setEditableContent(e.target.value)}
                className="text-p1 text-grey-1000 font-regular h-[200px] border border-grey-400 rounded-lg p-3 resize-none focus:outline-none"
              />
            ) : (
              <p className="text-p1 text-grey-1000 font-regular">
                {editableContent}
              </p>
            )}
          </article>
        </section>
        {isEditing && (
          <figure className="ml-auto">
            <BigButton
              colorType="primary"
              text="수정완료"
              onClick={handleSaveClick}
            />
          </figure>
        )}
      </main>
    </div>
  );
};

export default Page;
