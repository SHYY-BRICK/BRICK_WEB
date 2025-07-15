"use client";

import React from "react";
import Image from "next/image";
import Boy from "@/assets/characters/boy.png";
import CloseIcon from "@/assets/CloseIcon";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  amount: number;
}

const DetailModal = ({ isOpen, onClose, name, amount }: DetailModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-40">
      <main className="flex relative bg-white rounded-[20px] py-3 pl-6 pr-10 w-[565px] h-[336px]">
        <Image src={Boy} alt="boy" className="" />
        <section className="flex flex-col w-full">
          <button
            className="ml-auto pt-5 pb-9"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
          <p className="text-h3 font-semibold text-black pb-3">{name}</p>
          <figure className="flex gap-3 text-h4 font-semibold pb-1">
            <p className="text-grey-1100">내 자산</p>
            <p className="text-primary">{amount.toLocaleString()}</p>
          </figure>
        </section>
      </main>
    </div>
  );
};

export default DetailModal;
