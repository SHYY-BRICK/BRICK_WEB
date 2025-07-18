import CloseIcon from "@/assets/CloseIcon";
import { useEffect, useState } from "react";
import { usePostCoinSellBuy } from "@/hooks/usePostCoinSellBuy";
import { useQueryClient } from "@tanstack/react-query";

interface CoinStatusProps {
  status: "매수" | "매도";
  onClose: () => void;
  coinName: string;
  coinPrice: string;
  coinNum?: number;
  onSuccess?: () => void;
}

const CoinAlert = ({
  status,
  onClose,
  coinName,
  coinPrice,
  coinNum = 0,
  onSuccess,
}: CoinStatusProps) => {
  const [currentMoney, setCurrentMoney] = useState("0");

  useEffect(() => {
    const money = localStorage.getItem("money") || "0";
    setCurrentMoney(money);
  }, []);
  const parsedPrice = parseFloat(coinPrice);
  const [inputAmount, setInputAmount] = useState(0);

  const calculatedValue = parsedPrice * inputAmount;
  const safeCoinNum = typeof coinNum === "number" ? coinNum : 0;

  const { mutate: postCoin } = usePostCoinSellBuy();
  const queryClient = useQueryClient();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInputAmount(isNaN(value) ? 0 : value);
  };

  const handleSubmit = () => {
    if (inputAmount <= 0) {
      alert("1개 이상의 수량을 입력해주세요.");
      return;
    }

    const totalPrice = parsedPrice * inputAmount;
    const formattedPrice = (
      status === "매수" ? -totalPrice : totalPrice
    ).toString();

    postCoin(
      {
        coinName,
        price: formattedPrice,
        amount: inputAmount,
        type: status === "매수" ? "buy" : "sell",
      },
      {
        onSuccess: () => {
          alert(`${status} 요청이 완료되었습니다.`);
          queryClient.invalidateQueries({ queryKey: ["getCoin"] });
          queryClient.invalidateQueries({ queryKey: ["getUserInfo"] });

          onClose();
          onSuccess?.();
        },
        onError: () => {
          alert(`${status} 요청 중 문제가 발생했습니다.`);
        },
      },
    );
  };

  return (
    <main className="flex flex-col w-[560px] items-center justify-center p-9 rounded-lg gap-8">
      <div className="flex flex-col w-full gap-3">
        <div className="flex justify-between w-full">
          <span className="text-h3 text-grey-1000 font-semibold">
            {coinName} {status}하기
          </span>
          <div onClick={onClose} className="cursor-pointer">
            <CloseIcon />
          </div>
        </div>

        {status === "매수" ? (
          <div className="flex flex-col text-p2 text-grey-1000">
            <span>
              현재 가지고 계신 자산은 {Number(currentMoney).toLocaleString()}원
              입니다.
            </span>
            <span>
              {status} 시{" "}
              <span className="text-primary">
                {calculatedValue.toLocaleString()}
              </span>
              원이 필요합니다.
            </span>
          </div>
        ) : (
          <div className="flex flex-col text-p2 text-grey-1000">
            <span>
              현재 가지고 계신 코인은 {safeCoinNum.toLocaleString()}주 입니다.
            </span>
            <span>
              {status} 시{" "}
              <span className="text-primary">
                {calculatedValue.toLocaleString()}
              </span>
              원을 얻게 됩니다.
            </span>
          </div>
        )}
      </div>

      <input
        type="number"
        min={0}
        placeholder={`${status} 할 ${coinName} 코인의 개수를 입력해 주십시오`}
        className="w-full px-4 py-3 text-p1 border border-grey-500 rounded-lg focus:outline-none font-regular text-p2 text-grey-1300 placeholder:text-grey-600"
        value={inputAmount || ""}
        onChange={handleInputChange}
      />

      <div className="flex ml-auto gap-4 text-h5">
        <button
          onClick={onClose}
          className="px-3 py-1 font-semibold text-grey-600 rounded-lg"
        >
          취소
        </button>
        <button
          onClick={handleSubmit}
          className={`px-3 py-1.5 font-semibold text-white rounded-lg ${
            status === "매도" ? "bg-sell" : "bg-buy"
          }`}
        >
          {status}하기
        </button>
      </div>
    </main>
  );
};

export default CoinAlert;
