interface BigButtonProps {
  text: string;
  colorType: "buy" | "sell";
  onClick?: () => void;
}

const BigButton = ({ text, colorType, onClick }: BigButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-fit py-[0.5625rem] px-8 rounded-lg text-white text-h3 font-semibold ${
        colorType === "buy" ? "bg-buy" : "bg-sell"
      }`}
    >
      {text}
    </button>
  );
};

export default BigButton;
