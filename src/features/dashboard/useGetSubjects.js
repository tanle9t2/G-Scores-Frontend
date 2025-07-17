import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "../../services/subjectService";

export function useGetSubject() {
    const { isLoading, data: subjects, isError, error } = useQuery({
        queryKey: ["subjects"],
        queryFn: () => getSubjects(),
        cacheTime: 0,
        staleTime: 0,
        retry: 1,
    });
    return { isLoading, subjects, isError, error };
}