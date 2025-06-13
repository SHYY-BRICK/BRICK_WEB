"use client";

import { useState } from "react";

interface BigButtonProps {
  text: string;
}

const BigButton = ({ text }: BigButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <button
      onClick={handleClick}
      className={`w-fit py-[0.5625rem] px-8 rounded-lg text-white text-h3 font-semibold hover:bg-hoverBtn ${
        isClicked ? "bg-primary" : "bg-grey-600"
      }`}
    >
      {text}
    </button>
  );
};

export default BigButton;
