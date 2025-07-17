import { ClipLoader } from "react-spinners";
import { useGetTopUser } from "./useGetTopUser";

function TopStudent() {
    const { isLoading, students } = useGetTopUser()
    if (isLoading)
        return <ClipLoader />

    return (
        <div className="bg-white rounded-md shadow-md p-6 overflow-x-auto mt-6">
            <h2 className="font-semibold mb-4">Top 10 group A</h2>
            <table className="min-w-full border text-left">
                <thead className="bg-blue-100 text-gray-700">
                    <tr>
                        <th className="py-2 px-4 border">Id</th>
                        <th className="py-2 px-4 border">Total score</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item, index) => (
                        <tr key={index} className="hover:bg-blue-50">
                            <td className="py-2 px-4 border">{item.id}</td>
                            <td className="py-2 px-4 border">{item.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TopStudent;
