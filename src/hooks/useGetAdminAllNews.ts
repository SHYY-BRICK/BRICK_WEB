import { api } from "@/services/apis/axios";
import { GetUserAllNews } from "@/types/apis.types";
import { useQuery } from "@tanstack/react-query";

export const useGetAdminAllNews = () => {
  return useQuery<GetUserAllNews>({
    queryKey: ["useAdminNews"],
    queryFn: async () => {
      const response = await api.get("/admin/article");
      return response.data;
    },
  });
};
