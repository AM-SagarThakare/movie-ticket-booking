import { useNavigate } from "react-router-dom";

function Theatre({ theatre, movie_id }) {
  const navigate = useNavigate();

  return theatre?.map((element, index) => (
    <div
      className="border border-2 p-3 d-flex gap-3 align-items-center shadow-lg mt-2 rounded-5"
      key={index}
    >
      <b>{element.theatre_id?.name}</b>

      {element?.time?.map((ele, ind) => (
        <div
          className="border border-2 px-2 p-1 border-success cursor"
          key={ind}
          onClick={() => {
            navigate(`/user/movie/${movie_id}/${element._id}`, {
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
    </div>
  ));
}

export default Theatre;
