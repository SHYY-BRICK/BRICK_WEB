interface BigButtonProps {
  text: string;
  colorType: "buy" | "sell" | "primary";
  onClick?: () => void;
}

const BigButton = ({ text, colorType, onClick }: BigButtonProps) => {
  const getBgColor = () => {
    if (colorType === "buy") return "bg-buy";
    if (colorType === "sell") return "bg-sell";
    return "bg-primary";
  };

  return (
    <button
      onClick={onClick}
      className={`w-fit py-[0.5625rem] px-8 rounded-lg text-white text-h3 font-semibold ${getBgColor()}`}
    >
      {text}
    </button>
  );
};

export default BigButton;
