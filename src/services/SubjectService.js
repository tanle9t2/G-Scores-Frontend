import { API } from "../utils/axiosConfig";

export async function getSubjects() {
    const res = await API.get(`/api/v1/subjects`)

    return res.data;
}
