import Maru from "@/assets/coins/Maru";
import Tina from "@/assets/coins/Tina";
import Ioj from "@/assets/coins/Ioj";
import Bubble from "@/assets/coins/Bubble";
import Space from "@/assets/coins/Space";
import Harp from "@/assets/coins/Harp";
import Buma from "@/assets/coins/Buma";
import Teachmon from "@/assets/coins/Teachmon";
import Fla from "@/assets/coins/Fla";
import Match from "@/assets/coins/Match";
import { coins } from "@/data/coins";

interface StockMiniProps {
  stockName: string;
  stockNum?: number;
  stockPrice: number;
  stockChange: number;
  stockChangeRate: string;
  selected?: boolean;
  onClick: () => void;
}

const stockIcons: Record<string, React.FC> = {
  MRU: Maru,
  TNA: Tina,
  IOJ: Ioj,
  BBB: Bubble,
  SPC: Space,
  HAP: Harp,
  BWK: Buma,
  TCM: Teachmon,
  FLA: Fla,
  MTC: Match,
};

const StockMini = ({
  stockName,
  stockNum,
  stockPrice,
  stockChange,
  stockChangeRate,
  selected,
  onClick,
}: StockMiniProps) => {
  const IconComponent =
    stockIcons[stockName] ??
    (() => <div className="w-8 h-8 bg-grey-400 rounded-full" />);
  const matchedCoin = coins.find((coin) => coin.smallName === stockName);

  return (
    <main
      onClick={onClick}
      className="flex w-[16.5rem] cursor-pointer py-[0.5rem] px-3 border-t-[0.0625rem] border-grey-400 bg-white"
    >
      <div
        className={`flex justify-between w-full py-[0.4688rem] px-[0.375rem] rounded-xl ${
          selected ? "bg-grey-300" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-[0.375rem]">
          <IconComponent />
          <div className="flex flex-col">
            <span className="text-p1 text-grey-1200 font-[regular]">
              {matchedCoin?.name ?? stockName}
            </span>
            <span className="text-caption text-grey-700 font-[medium]">
              {stockNum?.toLocaleString()}주
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end">
          <span className="text-p2 text-grey-1000 font-[regular]">
            {stockPrice.toLocaleString()}원
          </span>
          <span
            className={`text-caption font-[medium] ${
              stockChange > 0 ? "text-red" : "text-blue"
            }`}
          >
            {(stockChange ?? 0).toLocaleString()} ({stockChangeRate}%)원
          </span>
        </div>
      </div>
    </main>
  );
};

export default StockMini;
