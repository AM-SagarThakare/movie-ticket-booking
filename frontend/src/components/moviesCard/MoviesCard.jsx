import React from "react";
import "./MoviesCard.css";
import { PiStarHalfFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../services";
import Swal from "sweetalert2";

function MoviesCard({ cards }) {
  const navigate = useNavigate();

  const showLoginMessage = () => {
    Swal.fire({
      title: "You need to Login first",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Login",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  const checkUserLogin = (ele) => {
    if (getToken("token")) {
      navigate(`/user/movie/${ele._id}`, {
        state: {
          movie_id: ele._id,
        },
      });
    } else {
      showLoginMessage();
    }
  };

  return cards.map((ele) => (
    <div
      className="card rounded-5 m-auto overflow-hidden position-relative cursor"
      key={ele._id}
      onClick={() => checkUserLogin(ele)}
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
