import React from "react";
import { getToken } from "../../services";
import { Outlet } from "react-router-dom";
import Error from "../Error";

function CheckToken() {
  return getToken("token") ? <Outlet /> : <Error />;
}

export default CheckToken;
