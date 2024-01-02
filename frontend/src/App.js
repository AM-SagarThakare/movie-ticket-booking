import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChooseSeats, MovieDetails, Navbar } from "./components";
import { Homepage, Register } from "./pages";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/movie/:movie_id" element={<MovieDetails />}></Route>
        <Route
          path="/movie/:movie_id/:theatre_id"
          element={<ChooseSeats />}
        ></Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
