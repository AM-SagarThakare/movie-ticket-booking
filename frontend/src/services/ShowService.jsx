import service from "../middlewares/interceptor";

const getShow = async (movie_id, theatre_id, time) => {

  return await service.get(`/user/show/${movie_id}/${theatre_id}/${time}`);
};

export { getShow };
