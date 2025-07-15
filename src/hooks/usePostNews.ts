import { api } from "@/services/apis/axios";
import { useMutation } from "@tanstack/react-query";

export const usePostNews = () => {
  return useMutation({
    mutationFn: async () => {
      await api.post("/article/ai");
    },
  });
};
