"use client";

import React, { useEffect } from "react";
import Money from "@/assets/money.png";
import Image from "next/image";

const Animation = () => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-screen h-screen bg-[rgba(39,39,39,0.2)] backdrop-blur-[5px] flex items-center justify-center overflow-hidden">
      <Image
        src={Money}
        alt="money"
        className="w-[300px] animate-complexMoneyAnimation z-10"
      />

      <style jsx global>{`
        @keyframes complexMoneyAnimation {
          0% {
            opacity: 0;
            transform: translateY(150px) scale(0.9) rotate(0deg);
            filter: blur(10px);
          }
          10% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
            filter: blur(0px);
          }
          20% {
            transform: rotate(5deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          30% {
            transform: rotate(7deg);
          }
          35% {
            transform: rotate(-7deg);
          }
          40% {
            transform: rotate(10deg);
          }
          45% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(6deg);
          }
          55% {
            transform: rotate(-6deg);
          }
          60% {
            transform: rotate(3deg);
          }
          65% {
            transform: rotate(-3deg);
          }
          70% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .animate-complexMoneyAnimation {
          animation: complexMoneyAnimation 4.5s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in forwards;
        }
      `}</style>
    </main>
  );
};

export default Animation;
