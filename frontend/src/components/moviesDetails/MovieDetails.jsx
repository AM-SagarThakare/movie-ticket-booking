import { useEffect, useState } from "react";
import { getMovieById } from "../../services";
import { useLocation } from "react-router-dom";
import Theatre from "../Theatre/Theatre";
import { PiStarHalfFill } from "react-icons/pi";


function MoviesDetails() {

    const location = useLocation()
    const movie_id = location.state.movie_id;
    const [data, setData] = useState()
    const [theatre, setTheatre] = useState()

    console.log(data?.coverImg)

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
                setTheatre(result.data.theatre)
            })
            .catch((err) => { console.log(err); })
    }, [])

    const style = {
        // backgroundColor : "black",
        // backgroundImage:`url(${data?.coverImg})`,
        background: `linear-gradient(90deg, black, transparent ), url(${data?.coverImg})`,
        backgroundRepeat: "no-repeat !important",
        backgroundSize: "cover !important",
        backgroundPosition: "center",
    }

    return (
        <div>

            <div className="w-100 border border-danger " style={style}>
                {/* <div className="w-100 border border-danger " style={{backgroundImage:`url(https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg)`}}> */}
                <div className="border border-primary container p-5 d-flex gap-5 text-light" style={{ backgroundImage: "linear-gradient(90deg, black, transparent )" }}>

                    {/* display image */}
                    <div className="">
                        <img src={data?.displayImg} alt={data?.displayImg} className="rounded-2"/>
                    </div>

                    {/* movie details */}
                    <div>
                        <h2>{data?.name}</h2>
                        <div className="d-flex align-items-center gap-2">

                        <PiStarHalfFill color="yellow" size={25} />
                        <h3 className="m-0">{data?.rating} /10</h3>
                        </div>
                        {getLanguages()}

                    </div>
                </div>
            </div>
            <div className="container">

                <Theatre theatre={data?.theatre} />
            </div>
        </div>
    )
}

export default MoviesDetails;