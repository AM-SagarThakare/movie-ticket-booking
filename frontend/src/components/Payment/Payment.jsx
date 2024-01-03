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
    <div className="container p-2">
      {/* alert message */}
      <div
        className="alert alert-warning alert-dismissible fade show border border-warning"
        role="alert"
      >
        <strong>Hurray Your seats temporary booked for 10 minutes! </strong>
        Make Payment for confirm your Seat
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div className="w-100 border border-danger d-flex justify-content-center">
        <div className="w-25 border border-dark rounded p-3 d-flex flex-column gap-3">
          <h3>Ticket No : {data?.ticketNo}</h3>
          <div>
            <b>Total Booked seats : </b> <span>{data?.bookedSeats} </span>
          </div>
          <div>
            <b>Seat Numbers : </b>{" "}
            <span>{data?.bookedSeatNumber.toString()}</span>
          </div>
          <div>
            <b>Ticket status : </b>{" "}
            <span className="text-danger">
              {data?.ticketStatus ? "Temporary Booked" : ""}{" "}
            </span>
          </div>

          <div>
            <b>Paid Amount : </b> <span>{data?.paidAmount}</span>
          </div>

          <span className="text-danger">
            after Payment your seat will be confirmed{" "}
          </span>
          <div>
            <button type="button" className="btn btn-success">
              Pay {data?.show_id?.ticket * data?.bookedSeats}
            </button>
          </div>
        </div>
      </div>
      Payment
    </div>
  );
}

export default Payment;
