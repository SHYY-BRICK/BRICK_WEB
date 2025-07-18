import { useMutation } from "@tanstack/react-query";
import { api } from "@/services/apis/axios";

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      if (typeof window === "undefined") return;
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      await api.post(
        "/auth/logout",
        { refreshToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
    },
    onSuccess: () => {
      localStorage.clear();
      window.location.href = "/";
    },
    onError: () => {
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
