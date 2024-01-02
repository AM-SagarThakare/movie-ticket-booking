import React from "react";
import "./Seats.css";

function Seats({ bookedSeats, temporaryBlockedSeats }) {
  console.log(temporaryBlockedSeats);

  const chairs = Array.from(Array(50), (_, index) => index + 1);
  const isTemporaryBlocked = (ele) => temporaryBlockedSeats?.includes(ele);
  const isAlreadyBooked = (ele) => bookedSeats?.includes(ele);

  return chairs.map((ele, ind) => (
    <span
      className={`border p-1 cursor rounded d-flex justify-content-center 
                ${
                  isAlreadyBooked(ele)
                    ? "booked-seat"
                    : isTemporaryBlocked(ele)
                    ? "temporary-blocked"
                    : ""
                }
                
        `}
      key={ind}
      onClick={() => {
        console.log(ele);
      }}
    >
      {ele}
    </span>
  ));
}

export default Seats;
