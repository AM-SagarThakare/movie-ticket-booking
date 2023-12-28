import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className=" shadow-lg px-5 navbar">
      <img
        src={logo}
        alt="logo"
        className="h-100 cursor"
        onClick={() => navigate("/")}
      />
      <div className="d-flex gap-3">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button type="button" className="btn btn-primary" onClick={()=>navigate('/login')}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;