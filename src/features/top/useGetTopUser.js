import { useQuery } from "@tanstack/react-query";
import { getTop10GroupA } from "../../services/StudentService";

export function useGetTopUser() {
    const { isLoading, data: students, isError, error } = useQuery({
        queryKey: ["top"],
        queryFn: () => getTop10GroupA(),
        retry: 1,
    });
    return { isLoading, students, isError, error };
}