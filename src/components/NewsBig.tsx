import React from "react";
import SmallButton from "./SmallButton";

interface NewsBigProps {
  publish?: boolean;
  title: string;
  description: string;
  date: string;
  onClickPublish?: () => void;
}

const NewsBig = ({
  publish = false,
  title,
  description,
  date,
  onClickPublish,
}: NewsBigProps) => {
  const truncatedDescription =
    description.length > 111 ? `${description.slice(0, 111)}...` : description;

  return (
    <main className="flex gap-6 p-6 w-full rounded-xl items-center bg-white">
      <div className="w-[136px] h-[136px] bg-black" />
      <article className="flex flex-col gap-2 w-full h-full">
        <p className="text-h5 text-grey-1200 font-semibold">{title}</p>
        <p className="w-full text-p2 text-grey-700 font-regular">
          {truncatedDescription}
        </p>
        <p className="text-caption font-regular text-grey-900">{date}</p>
        {publish && (
          <div className="ml-auto">
            <SmallButton text="취소" colorType="transparent" />
            <SmallButton
              text="출판"
              colorType="primary"
              onClick={onClickPublish}
            />
          </div>
        )}
      </article>
    </main>
  );
};

export default NewsBig;
