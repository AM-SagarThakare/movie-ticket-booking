import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChooseSeats, MovieDetails, Navbar, Payment } from "./components";
import { Homepage, Register } from "./pages";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import { getToken } from "./services";
import CheckToken from "./components/utils/CheckToken";
import Error from "./components/UrlNotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/user/movie/:movie_id/" element={<CheckToken />}>
          <Route path="" element={<MovieDetails />}></Route>
          <Route path=":theatre_id" element={<ChooseSeats />}></Route>
          <Route path="make-payment/:ticket_id" element={<Payment />}></Route>
        </Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
