import { api } from "@/services/apis/axios";
import { CoinDetails } from "@/types/apis.types";
import { useQuery } from "@tanstack/react-query";

export const useGetCoinDetail = (name: string | null) => {
  return useQuery<CoinDetails[]>({
    queryKey: ["coindetail", name],
    queryFn: async () => {
      const response = await api.get(`/user/coin?name=${name}`);
      return response.data;
    },
    enabled: !!name,
  });
};
