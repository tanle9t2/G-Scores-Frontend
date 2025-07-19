import { ClipLoader } from "react-spinners";
import Filter from "../../ui/Filter";
import { useGetSubject } from "./useGetSubjects";
import { subjectMap } from "../../utils/helper";

function DashboardFilter() {
    const { isLoading, subjects } = useGetSubject()
    if (isLoading)
        return <ClipLoader />


    return (
        <Filter
            filterField="subjectId"
            options={subjects
                .sort((a, b) => a.id - b.id)
                .map(s => ({
                    value: `${s.id}`,
                    label: subjectMap[s.name]
                }))}
        />
    );
}

export default DashboardFilter;