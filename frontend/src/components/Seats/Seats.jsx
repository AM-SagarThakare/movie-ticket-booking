
function Seats({
  selectedSeats,
  bookedSeats,
  temporaryBlockedSeats,
  setSelectedSeats,
}) {

  // create chairs according to the capacity of theatre
  const chairs = Array.from(Array(70), (_, index) => index + 1);

  const isTemporaryBlocked = (ele) => temporaryBlockedSeats?.includes(ele);
  const isAlreadyBooked = (ele) => bookedSeats?.includes(ele);
  const isSelected = (ele) => selectedSeats?.includes(ele);

  // select/seselect seat if it is not booked already, not present in already booked/temporary booked seats
  const bookMySeat = (ele) => {
    if (!bookedSeats.includes(ele) && !temporaryBlockedSeats.includes(ele)) {
      if (selectedSeats.includes(ele)) {
        setSelectedSeats(selectedSeats.filter((items) => items !== ele));
      } else setSelectedSeats((prev) => [...prev, ele]);
    }
  };

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
                ${isSelected(ele) ? "selected-seat" : ""}
        `}
      key={ind}
      onClick={() => bookMySeat(ele)}
    >
      {ele}
    </span>
  ));
}

export default Seats;
