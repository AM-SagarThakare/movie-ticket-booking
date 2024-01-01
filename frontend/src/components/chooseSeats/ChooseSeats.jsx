import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ChooseSeats({ bookedSeats, modalShow, setModalShow }) {

    return (
        <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Choose Seats
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>select seats UI coming soon...</h4>
                <p>
                    
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => setModalShow(false)}>Close</Button>
                <Button variant="success" onClick={() => setModalShow(false)}>Select seats</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChooseSeats
