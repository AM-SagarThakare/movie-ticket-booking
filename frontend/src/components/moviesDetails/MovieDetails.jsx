import { useEffect, useState } from "react";
import { getMovieById } from "../../services";
import { useLocation } from "react-router-dom";



function MoviesDetails() {
    const location = useLocation()
    const movie_id = location.state.movie_id;
    const [data, setData] = useState()

    console.log(data)

    const getLanguages = () => {
        return (
            data?.audio.map(
                (language, ind) => <span key={ind}>{language}</span>
            )
        )
    }

    useEffect(() => {
        getMovieById(movie_id)
            .then((result) => {
                setData(result.data)
            })
            .catch((err) => { console.log(err); })
    }, [])

    return (
        <div className="w-100 border border-danger ">
            <div className="border border-primary container p-5 d-flex gap-3">

                {/* display image */}
                <div className="">
                    <img src={data?.displayImg} alt={data?.displayImg} />
                </div>

                {/* movie details */}
                <div>
                    <h2>{data?.name}</h2>
                    <h3>{data?.rating}</h3>
                    {getLanguages()}
                </div>
            </div>
        </div>
    )
}

export default MoviesDetails;