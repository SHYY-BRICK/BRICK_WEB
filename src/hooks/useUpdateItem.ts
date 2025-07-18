import { api } from "@/services/apis/axios";
import { useMutation } from "@tanstack/react-query";

interface UpdateItem {
  clothes: string;
  accessories: string;
}

export const useUpdateItem = () => {
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  // const accessToken = localStorage.getItem("accessToken");

  return useMutation({
    mutationFn: async (body: UpdateItem) => {
      return await api.patch("/user/cloth/wear", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
  });
};
