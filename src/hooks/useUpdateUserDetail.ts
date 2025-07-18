import { useMutation } from "@tanstack/react-query";
import { api } from "@/services/apis/axios";

interface UpdateUserDetailRequest {
  nickname: string;
  gender: string;
}

export const useUpdateUserDetail = () => {
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  // const accessToken = localStorage.getItem("accessToken");

  return useMutation({
    mutationFn: async (body: UpdateUserDetailRequest) => {
      return await api.patch("/auth/detail", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
  });
};
