import { useQuery } from "@tanstack/react-query";
import { getTop10GroupA } from "../../services/StudentService";

export function useGetTopUser() {
    const { isLoading, data: students, isError, error } = useQuery({
        queryKey: ["subjects"],
        queryFn: () => getTop10GroupA(),
        cacheTime: 0,
        staleTime: 0,
        retry: 1,
    });
    return { isLoading, students, isError, error };
}