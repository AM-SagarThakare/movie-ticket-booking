import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { getToken, removeToken } from "../../services/TokenService";

function Navbar() {
  const navigate = useNavigate();
  const [isLogged, setLoggedIn] = useState(false)

  const logoutUser = () => {
    removeToken('token')
    setLoggedIn(false)
    navigate('/')
  }

  useEffect(() => { 
    setLoggedIn(!!getToken("token"))
  })
  return (
    <div className=" shadow-lg px-5 navbar">
      <img
        src={logo}
        alt="logo"
        className="h-100 cursor"
        onClick={() => navigate("/")}
      />
      {isLogged ? (
        <div className="d-flex gap-3">
          <FaUserCircle className="cursor" size={30} />
          <button type="button" className="btn btn-sm btn-danger" onClick={() => logoutUser()}>Logout</button>
        </div>
      ) : (
        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
