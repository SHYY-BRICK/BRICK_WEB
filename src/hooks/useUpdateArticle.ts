import { api } from "@/services/apis/axios";
import { useMutation } from "@tanstack/react-query";

interface UpdateArticle {
  id: number;
  content: string;
}

export const useUpdateArticle = () => {
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  // const accessToken = localStorage.getItem("accessToken");

  return useMutation({
    mutationFn: async (body: UpdateArticle) => {
      return await api.patch("/article", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
  });
};
