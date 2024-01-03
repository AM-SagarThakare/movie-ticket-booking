import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTicket } from "../../services";

function Payment() {
  const location = useLocation();
  const ticket_id = location.state.ticket_id;
  const [data, setData] = useState();
  console.log(ticket_id);
  // console.log(data);

  useEffect(() => {
    getTicket(ticket_id)
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="container">
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>Hurray Your seats temporary booked for 10 minutes! </strong>
        Make Payment for confirm your books
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      Payment
    </div>
  );
}

export default Payment;
