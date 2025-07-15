import { api } from "@/services/apis/axios";
import { useMutation } from "@tanstack/react-query";

interface PostPublish {
  articleId: number;
}

export const useUpdatePublish = () => {
  return useMutation({
    mutationFn: async ({ articleId }: PostPublish) => {
      await api.patch(`/article/publish/${articleId}`);
    },
  });
};
