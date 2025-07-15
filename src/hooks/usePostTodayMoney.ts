import { api } from "@/services/apis/axios";
import { useMutation } from "@tanstack/react-query";

export const usePostTodayMoney = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await api.post("/user/money");
      return response;
    },
  });
};
