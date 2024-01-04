import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getTicket, updateServiceById } from "../../services";
import Swal from "sweetalert2";

function Payment() {
  const location = useLocation();
  const ticket_id = location.state.ticket_id;
  const [data, setData] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    getTicket(ticket_id)
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((err) => {});
  }, []);

  const makePayment = () => {
    Swal.fire({
      title: "Confirm Payment",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Payment!",
    }).then((result) => {
      console.log(result);

      if (result.isConfirmed) {
        updateServiceById(data._id, {
          bookedSeatNumber: data.bookedSeatNumber,
          show_id: data.show_id._id,
          paidAmount: data?.show_id?.ticket * data?.bookedSeats,
        })
          .then((result) => {
            Swal.fire({
              title: "Payment Done!",
              text: "You will get tickets on your registered email-id.",
              icon: "success",
            }).then(()=>{
              navigate('/')
            })
          })
          .catch(() => {});
      }
    });
  };

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
            <button
              type="button"
              className="btn btn-success"
              onClick={() => makePayment()}
            >
              Pay {data?.show_id?.ticket * data?.bookedSeats}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
