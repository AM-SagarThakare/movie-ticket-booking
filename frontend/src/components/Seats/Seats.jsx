import React from "react";

function Seats({ bookedSeats, temporaryBlockedSeats, setSelectedSeats }) {
  //   console.log(temporaryBlockedSeats);

  const chairs = Array.from(Array(50), (_, index) => index + 1);
  const isTemporaryBlocked = (ele) => temporaryBlockedSeats?.includes(ele);
  const isAlreadyBooked = (ele) => bookedSeats?.includes(ele);

  return chairs.map((ele, ind) => (
    <span
      className={`empty-seat p-1 cursor rounded d-flex justify-content-center align-items-center 
                ${
                  isAlreadyBooked(ele)
                    ? "booked-seat"
                    : isTemporaryBlocked(ele)
                    ? "temporary-blocked"
                    : ""
                }
                
        `}
      key={ind}
      onClick={() => setSelectedSeats((prev) => [...prev, ele])}
    >
      {ele}
    </span>
  ));
}

export default Seats;
