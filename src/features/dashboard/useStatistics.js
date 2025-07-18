import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getStatics } from "../../services/statisticsService";

export function useStatistics() {
    const [searchParams] = useSearchParams();
    const subjectId = searchParams.get("subjectId") ? searchParams.get("subjectId") : 1;
    const { isLoading, data: statistics, isError, error } = useQuery({
        queryKey: ["subjectId", subjectId],
        queryFn: () => getStatics(subjectId),
        retry: 1,
    });
    return { isLoading, statistics, isError, error };
}