import { api } from "@/services/apis/axios";
import { UserRank } from "@/types/apis.types";
import { useQuery } from "@tanstack/react-query";

export const useGetRank = () => {
  return useQuery<UserRank[]>({
    queryKey: ["rank"],
    queryFn: async () => {
      const response = await api.get("/user/rank");
      return response.data;
    },
  });
};
