import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getShow } from "../../services";
import { useLocation } from "react-router-dom";

function ChooseSeats() {
  const [data, setData] = useState({});

  const location = useLocation();
  const { movie_id, theatre_id, time } = location.state;

  console.log(movie_id, theatre_id, time);

  console.log("choose seat data", data);

  useEffect(() => {
    getShow(movie_id, theatre_id, time)
      .then((result) => {
        console.log("result", result);
        setData(result.data);
      })
      .catch((err) => {});
  }, []);

  //   return (
  //     <Modal
  //       size="md"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //       show={modalShow}
  //     >
  //       <Modal.Header>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Choose Seats
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <h1>{data?.time}</h1>
  //         {/* <p>{data?.time}</p> */}
  //         <p>show avaible seats</p>

  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="danger" onClick={() => setModalShow(false)}>
  //           Close
  //         </Button>
  //         <Button variant="success" onClick={() => setModalShow(false)}>
  //           Select seats
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );

  return <div className="container border border-danger">
    <b>show seats here</b>
    
  </div>;
}

export default ChooseSeats;
