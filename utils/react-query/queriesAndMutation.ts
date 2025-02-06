import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import { getAllBlogs, getOneBlog } from "../../api-calls/blogs-api";

export const useGetBlogs = () => {
   return useInfiniteQuery({
      queryKey: [QUERY_KEYS.GET_ALL_BLOGS],
      queryFn: ({ pageParam = 1 }) => getAllBlogs({ pageParam }),
      getNextPageParam: (lastPage) => {
         if (lastPage.page >= lastPage.totalPages) return null;
         return lastPage.page + 1;
      },
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      initialPageParam: 1,
   });
};


export const useGetOneBlog = (slugParams: string) => { 
   return useQuery({
      queryKey: [QUERY_KEYS.GET_ONE_BLOG, slugParams],
      queryFn: () => getOneBlog(slugParams),
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
   });
};