import React, { useState } from "react";
import pramotionImg from "../../images/pramotion.avif";
import "./Homepage.css";
import { useEffect } from "react";
import { getAllMovies } from "../../services";
import MoviesCard from "../../components/moviesCard/MoviesCard";

function Homepage() {
  const [cardData, setCardsData] = useState([]);
  const text = "See All >";
  useEffect(() => {
    getAllMovies()
      .then((result) => {
        setCardsData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="container border border-danger">
      {/* pramotion image */}
      <div className="d-flex justify-content-center py-5">
        <img
          src={pramotionImg}
          alt="pramotion img "
          className="rounded h-100 w-100"
        />
      </div>

      {/* movies  */}
      <div className="movies-div ">

        <div className="d-flex justify-content-between p-2">
          <h4 className="text-dark">Recommended Movies</h4>
          <span className="text-danger"> {text} </span>
        </div>

        <div className="d-flex flex-wrap">
          <MoviesCard cards={cardData} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
