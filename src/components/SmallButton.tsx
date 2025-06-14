"use client";

import React from "react";

interface SmallButtonProps {
  text: string;
  colorType: "primary" | "transparent" | "red";
  onClick?: () => void;
}

const SmallButton = ({
  text,
  colorType = "transparent",
  onClick,
}: SmallButtonProps) => {
  const colorClasses = {
    primary: "bg-primary text-white",
    transparent: "bg-transparent text-grey-600",
    red: "bg-red text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`w-fit py-1 px-3 rounded-lg text-p1 font-[regular] ${colorClasses[colorType]}`}
    >
      {text}
    </button>
  );
};

export default SmallButton;