import React from "react";
import { getToken } from "../../services";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Error from "../Error";
// import Swal from "sweetalert2";
// import LoginRequired from "../LoginRequired";

function CheckToken() {

  return getToken("token") ? <Outlet /> : <Error />
}

// const showLoginMessage = (navigate) => {
//     console.log('in show message');
//   Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success",
//   });

//   navigate("/");
// };

export default CheckToken;
