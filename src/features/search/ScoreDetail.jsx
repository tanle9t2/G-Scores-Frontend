import { subjectMap } from "../../utils/helper";

function ScoreDetail({ fCode, scores }) {
    console.log(scores)
    return (
        <div className="bg-white rounded-md shadow-md p-6 overflow-x-auto mt-6">
            <h2 className="font-semibold mb-4">Scores</h2>
            <table className="min-w-full border text-left">
                <thead className="bg-blue-100 text-gray-700">
                    <tr>
                        <th className="py-2 px-4 border">Subject</th>
                        <th className="py-2 px-4 border">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((item, index) => (
                        <tr key={index} className="hover:bg-blue-50">
                            <td className="py-2 px-4 border">{subjectMap[item.subject]}</td>
                            <td className="py-2 px-4 border">{item.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {fCode && <p className="mt-5 text-gray-500 italic ">(*) Foreign language code: {fCode}</p>}
        </div>
    );
}

export default ScoreDetail
