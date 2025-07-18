import { API } from "../utils/axiosConfig";

export async function getStatics(subjectId) {
    const res = await API.get(`/api/v1/statistics?subjectId=${subjectId}`)

    return res.data;
}
