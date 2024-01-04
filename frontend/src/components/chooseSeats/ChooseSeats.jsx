import React, { useEffect, useState } from "react";
import { addTickets, getShow } from "../../services";
import { useLocation, useNavigate } from "react-router-dom";
import Seats from "../Seats/Seats";
import "./ChooseSeats.css";

function ChooseSeats() {
  const [data, setData] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { movie_id, theatre_id, time } = location.state;

  useEffect(() => {
    getShow(movie_id, theatre_id, time)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {});
  }, []);

  const gotoPayment = () => {
    const payload = {
      bookedSeats: selectedSeats.length,
      show_id: data._id,
      bookedSeatNumber: selectedSeats,
    };

    addTickets(payload)
      .then((result) => {
        navigate(`/user/movie/${movie_id}/make-payment/:${data._id}`, {
          state: {
            ticket_id: result.data._id,
          },
        });
      })
      .catch((err) => {});
  };

  return (
    <div className="container border border-danger">
      <b>Select Your favourite seat</b>

      <div className="d-flex justify-content-center flex-column align-items-center gap-3 pt-3">
        <div className="seats-container py-4">
          <Seats
            selectedSeats={selectedSeats}
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

        

        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => gotoPayment()}
            disabled={selectedSeats.length > 0 ? false : true}
          >
            Go to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseSeats;
