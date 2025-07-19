import { useMutation } from "@tanstack/react-query"
import { getScores } from "../../services/StudentService"

export function useSearch() {
    const { isPending, mutate: searchScores } = useMutation({
        mutationFn: ({ id }) => getScores(id)
    })

    return { isPending, searchScores }
}