import { useState } from 'react'
import ChooseSeats from '../chooseSeats/ChooseSeats';



function Theatre({ theatre }) {
    const [modalShow, setModalShow] = useState(false);
    console.log(theatre);

    return (
        theatre?.map(
            (element, index) => <div className='border p-3 d-flex gap-3 align-items-center ' key={index}>
                <b>{element.theatre_id?.name}</b>
                {getTimeOfMovie(element.time, setModalShow)}
                {/* <b onClick={}> {}</b> */}

                <ChooseSeats
                    totalSeats={element.theatre_id?.totalSeats}
                    bookedSeats={element.theatre_id?.bookedSeats}
                    modalShow={modalShow}
                    setModalShow={setModalShow}
                />
            </div>
        ))
}

const getTimeOfMovie = (times, setModalShow) => (times.map(
    (ele, ind) =>
        <div className='border border-2 px-2 p-1 border-success'
            key={ind}
            onClick={() => setModalShow(true)}
        >
            {ele}
        </div>
)
)


export default Theatre
