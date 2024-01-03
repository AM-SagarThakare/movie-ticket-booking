import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();
  // const show_id = location.state.show_id;
  // console.log(show_id);

  useEffect(() => {
    console.log("ss");
  }, []);
  return (
    <div className="container">
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Hurray Your seats temporary booked for 10 minutes!  </strong> 
        Make Payment for confirm your books
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      Payment
    </div>
  );
}

export default Payment;
