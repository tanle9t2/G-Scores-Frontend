import { API } from "../utils/axiosConfig";

export async function getScores(studentId) {
    const res = await API.get(`/api/v1/student/${studentId}`)

    return res.data;
}

export async function getTop10GroupA() {
    const res = await API.get(`/api/v1/student/top`)

    return res.data;
}

