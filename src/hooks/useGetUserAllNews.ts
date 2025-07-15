import { api } from "@/services/apis/axios";
import { GetUserAllNews } from "@/types/apis.types";
import { useQuery } from "@tanstack/react-query";

export const useGetUserAllNews = () => {
  return useQuery<GetUserAllNews>({
    queryKey: ["useNews"],
    queryFn: async () => {
      const response = await api.get("/article");
      return response.data;
    },
  });
};
