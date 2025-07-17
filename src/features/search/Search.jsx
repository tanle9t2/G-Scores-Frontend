import { useState } from "react";
import ScoreDetail from "./ScoreDetail";
import ScoreEmpty from "./ScoreEmpty";
import { useSearch } from "./useSearch";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

function Search() {
    const [scores, setScores] = useState(null)
    const [fCode, setFCode] = useState(null)
    const { isLoading, searchScores } = useSearch()
    const [state, setState] = useState("")
    if (isLoading)
        return <ClipLoader color="#0f172a" size={35} />


    function handleOnClick() {
        if (state.trim() === "") {
            toast.error("Enter your id!")
            return
        }
        searchScores({ id: state }, {
            onSuccess: (data) => {
                setScores(data.scores)
                setFCode(data.flanguageCode)
            },
            onError: (error) => {
                toast.error(error.response.data.detail)
            }
        })
    }
    return (
        <div className="min-h-screen bg-gray-100 ">
            {/* Card: User Registration */}
            <div className="bg-white  rounded-md shadow-md p-6 mb-6">
                <h2 className="text-5xl font-semibold mb-4">User Registration</h2>
                <div className="flex items-center gap-2">
                    <label htmlFor="regNumber" className="text-3xl">
                        Registration Number:
                    </label>
                    <input
                        id="regNumber"
                        type="text"
                        placeholder="Enter registration number"
                        className="border rounded px-3 py-1  w-80"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <button onClick={() => handleOnClick()} className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-600">
                        Submit
                    </button>
                </div>
            </div>
            {scores ? <ScoreDetail fCode={fCode} scores={scores} /> : <ScoreEmpty />}

        </div>

    )
}

export default Search
