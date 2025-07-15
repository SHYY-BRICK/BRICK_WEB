"use client";

import EditIcon from "@/assets/EditIcon";
import LeftArrowIcon from "@/assets/LeftArrowIcon";
import BigButton from "@/components/BigButton";
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const searchParams = useSearchParams();

  const titleFromQuery = searchParams.get("title") || "";
  const contentFromQuery = searchParams.get("content") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";

  const handleBackClick = () => {
    window.history.back();
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(titleFromQuery);
  const [editableContent, setEditableContent] = useState(contentFromQuery);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => setIsEditing(false);

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] bg-grey-300">
      <Header />
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
                {date} {time}
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
