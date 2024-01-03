import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChooseSeats, MovieDetails, Navbar, Payment } from "./components";
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
        <Route path="/movie/:movie_id/make-payment/:ticket_id" element={<Payment />}></Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
