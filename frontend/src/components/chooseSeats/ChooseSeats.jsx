import React, { useEffect, useState } from "react";
import { getShow } from "../../services";
import { useLocation } from "react-router-dom";
import Seats from "../Seats/Seats";
import "./ChooseSeats.css";

function ChooseSeats() {
  const [data, setData] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);

  const location = useLocation();
  const { movie_id, theatre_id, time } = location.state;

  console.log("selected seats", selectedSeats);

  useEffect(() => {
    getShow(movie_id, theatre_id, time)
      .then((result) => {
        console.log("result", result);
        setData(result.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="container border border-danger">
      <b>show seats here</b>

      <div className="d-flex justify-content-center flex-column align-items-center gap-4">
        <div className="seats-container py-4">
          <Seats
            setSelectedSeats={setSelectedSeats}
            bookedSeats={data?.bookedSeats}
            temporaryBlockedSeats={data?.temporaryBlockedSeats}
          />
        </div>
        <div className="text-primary">
          <span>All eyes this way please</span>
        </div>

        <div>
          <div className="d-flex align-items-center gap-2 ">
            <div className="p-2  booked-seat rounded"> </div>
            <span>- Already Booked Seat</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <div className="p-2  temporary-blocked rounded"> </div>
            <span>- temporary Booked Seat</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <div className="p-2 selected-seat rounded"> </div>
            <span>- Your Selected Seat</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSeats;
