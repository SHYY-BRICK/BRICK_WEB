import { api } from "@/services/apis/axios";
import { Coin } from "@/types/apis.types";
import { useQuery } from "@tanstack/react-query";

export const useGetCoin = () => {
  return useQuery<Coin>({
    queryKey: ["coin"],
    queryFn: async () => {
      const response = await api.get("/fluctuation");
      return response.data;
    },
  });
};
