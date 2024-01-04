import { useEffect, useState } from "react";
import { getMovieById } from "../../services";
import { useLocation } from "react-router-dom";
import Theatre from "../Theatre/Theatre";
import { PiStarHalfFill } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";

function MoviesDetails() {
  const location = useLocation();
  const movie_id = location.state.movie_id;
  const [data, setData] = useState();

  const getLanguages = () => {
    return data?.audio.map((language, ind) => (
      <b className="bg-light text-dark px-2" key={ind}>
        {language}
      </b>
    ));
  };

  useEffect(() => {
    getMovieById(movie_id)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {});
  }, []);

  const style = {
    background: `linear-gradient(90deg, black, transparent), url(${data?.coverImg}) no-repeat center/cover`,
  };

  return (
    <div>
      <div className="w-100 " style={style}>
        <div
          className=" container p-5 d-flex gap-5 text-light"
          style={{
            backgroundImage: "linear-gradient(90deg, black, transparent )",
          }}
        >
          {/* display image */}
          <div className="">
            <img
              src={data?.displayImg}
              alt={data?.displayImg}
              className="rounded-2"
            />
          </div>

          {/* movie details */}
          <div className="d-flex flex-column gap-3 align-items-start">
            <h2 className="m-0">{data?.name}</h2>

            <div className="d-flex align-items-center gap-2 ">
              <PiStarHalfFill color="yellow" size={25} />
              <h3 className="m-0">{data?.rating} /10</h3>
            </div>

            <div className="d-flex gap-1">{getLanguages()}</div>

            <div className="text-dark">
              {" "}
              <span className="p-1 px-2 bg-light ">2D</span>{" "}
              <span className="p-1 px-2 bg-light ">3D</span>
            </div>
            <div className="border border-light px-3 rounded-5 cursor">
              <a href={data?.trailer} target="_blank" rel="noreferrer">
                trailer
              </a>{" "}
              <FaPlayCircle />
            </div>

            <div className="d-flex border border-light p-3 rounded rounded-3 gap-3 align-items-center">
              <div className="d-flex flex-column">
                <h5>Releasing on 1 feb,2024</h5>
                <span className="fs-6">
                  {" "}
                  Are you interested to see this movie?
                </span>
              </div>
              <button type="button" className="btn bg-light text-dark">
                I'm Interested
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Theatre theatre={data?.theatre} movie_id={data?._id} />
      </div>
    </div>
  );
}

export default MoviesDetails;
