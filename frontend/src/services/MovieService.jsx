import service from "../middlewares/interceptor";

const getAllMovies = async () => {
  return await service.get("/movie");
};

export { getAllMovies };
