"use client";

import { useState } from "react";

interface SmallButtonProps {
  text: string;
}

const SmallButton = ({ text }: SmallButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <button
      onClick={handleClick}
      className={`w-fit py-1 px-3 rounded-lg  text-p1 font-[regular] hover:bg-red hover:text-white ${
        isClicked ? "bg-primary text-white" : "bg-transparent text-grey-600"
      }`}
    >
      {text}
    </button>
  );
};

export default SmallButton;
