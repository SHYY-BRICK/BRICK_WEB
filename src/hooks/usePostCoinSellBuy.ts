import { api } from "@/services/apis/axios";
import { useMutation } from "@tanstack/react-query";

interface CoinSellBuy {
  coinName: string;
  price: string;
  amount: number;
  type: "buy" | "sell";
}

export const usePostCoinSellBuy = () => {
  return useMutation({
    mutationFn: async (body: CoinSellBuy) => {
      await api.post("/user/coin", body);
    },
  });
};
