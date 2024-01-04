import service from "../middlewares/interceptor";

const getAllMovies = async () => {
  return await service.get("/user/movie");
};

const getMovieById = async (movie_id) => {
  return service.get(`/user/movie/${movie_id}`)
}

export { getAllMovies, getMovieById };
