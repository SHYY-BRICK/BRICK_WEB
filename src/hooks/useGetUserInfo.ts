import { api } from "@/services/apis/axios";
import { GetUserInfo } from "@/types/apis.types";
import { useQuery } from "@tanstack/react-query";

export const useGetUserInfo = () => {
  return useQuery<GetUserInfo>({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await api.get("/user/basic-info");
      return response.data;
    },
  });
};
