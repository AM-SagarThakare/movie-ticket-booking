import React, { useState } from "react";

function Seats({ selectedSeats, bookedSeats, temporaryBlockedSeats, setSelectedSeats }) {
  //   console.log(temporaryBlockedSeats);
  // const [selected, setSelected] = useState(false)

  const chairs = Array.from(Array(70), (_, index) => index + 1);
  const isTemporaryBlocked = (ele) => temporaryBlockedSeats?.includes(ele);
  const isAlreadyBooked = (ele) => bookedSeats?.includes(ele);
  const isSelected = (ele) => selectedSeats?.includes(ele)

  return chairs.map((ele, ind) => (
    <span
      className={`empty-seat p-1 cursor rounded d-flex justify-content-center align-items-center 
                ${isAlreadyBooked(ele)
          ? "booked-seat"
          : isTemporaryBlocked(ele)
            ? "temporary-blocked"
            : ""
        }
                ${isSelected(ele) ? "selected-seat" : ""}
                
        `}
      key={ind}
      onClick={() => {
        if (selectedSeats.includes(ele)) {
          setSelectedSeats(selectedSeats.filter(items => items !== ele))
        } else
          setSelectedSeats((prev) => [...prev, ele])
      }}
    >
      {ele}
    </span>
  ));
}

export default Seats;
