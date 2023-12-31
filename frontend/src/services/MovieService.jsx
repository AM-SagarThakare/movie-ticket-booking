import service from "../middlewares/interceptor";

const getAllMovies = async () => {
  return await service.get("/movie");
};

const getMovieById = async (movie_id) => {
  return service.get(`/movie/${movie_id}`)
}

export { getAllMovies, getMovieById };
