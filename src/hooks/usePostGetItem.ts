import { api } from "@/services/apis/axios";
import { useMutation } from "@tanstack/react-query";

interface PostGetItem {
  type: string;
  name: string;
}

export const usePostGetItem = () => {
  return useMutation({
    mutationFn: async (body: PostGetItem) => {
      await api.post("/user/cloth", body);
    },
  });
};
