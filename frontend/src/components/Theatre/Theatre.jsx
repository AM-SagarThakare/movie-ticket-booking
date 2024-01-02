import { useState } from "react";
import ChooseSeats from "../chooseSeats/ChooseSeats";
import { useNavigate } from "react-router-dom";

function Theatre({ theatre, movie_id }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();

  console.log(theatre);

  return theatre?.map((element, index) => (
    <div className="border p-3 d-flex gap-3 align-items-center " key={index}>
      <b>{element.theatre_id?.name}</b>

      {element?.time?.map((ele, ind) => (
        <div
          className="border border-2 px-2 p-1 border-success cursor"
          key={ind}
          onClick={() => {
            navigate(`/movie/${movie_id}/${element._id}`, {
              state: {
                movie_id,
                theatre_id: element?.theatre_id?._id,
                time: ele,
              },
            });
          }}
        >
          {ele}
        </div>
      ))}

      {selectedTime && (
        <ChooseSeats
          theatre_id={element?.theatre_id?._id}
          modalShow={modalShow}
          setModalShow={setModalShow}
          movie_id={movie_id}
          selectedTime={selectedTime}
        />
      )}
    </div>
  ));
}

// const getTimeOfMovie = (times, setModalShow, setSelectedTime) =>
//   times.map((ele, ind) => (
//     <div
//       className="border border-2 px-2 p-1 border-success cursor"
//       key={ind}
//       onClick={() => {
//         // setModalShow(true);
//         // setSelectedTime(ele);
//         navigate(`/`)
//       }}
//     >
//       {ele}
//     </div>
//   ));

export default Theatre;
