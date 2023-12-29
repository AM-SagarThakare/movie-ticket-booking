import React from "react";
import "./MoviesCard.css";
import { PiStarHalfFill } from "react-icons/pi";

function MoviesCard({ cards }) {
  console.log(cards);
  return cards.map((ele) => (
    <div
      className="card rounded-5 m-auto overflow-hidden position-relative cursor"
      key={ele._id}
    >
      <img src={ele.displayImg} alt={ele.name} className=" object-fit-cover" />

      <div className="details position-absolute fixed-bottom text-light d-flex align-item-center p-2 gap-2">
        <PiStarHalfFill color="yellow" size={25} />
        <p className="m-0">{ele.rating}/10</p>
      </div>
    </div>
  ));
}

export default MoviesCard;
