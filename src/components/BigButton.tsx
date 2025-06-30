interface BigButtonProps {
  text: string;
  colorType: "buy" | "sell";
}

const BigButton = ({ text, colorType }: BigButtonProps) => {
  return (
    <button
      className={`w-fit py-[0.5625rem] px-8 rounded-lg text-white text-h3 font-semibold 
        ${colorType === "buy" ? "bg-buy" : "bg-sell"}
      `}
    >
      {text}
    </button>
  );
};

export default BigButton;
