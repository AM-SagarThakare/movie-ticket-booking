import React from "react";
import Swal from "sweetalert2";

function LoginRequired() {
  const show = () => {
    Swal.fire({
      title: "You need to login first!",
    //   text: "You clicked the button!",
      icon: "warning",
    });
  };
  return <div>{show()} </div>;
}

export default LoginRequired;
