const { movieController } = require("../controllers");
const validate = require("../middlewares/validate");
const { movieValidation } = require("../validations");

const router = require("express").Router();

router.get("/", movieController.getAllMovies);

router.get("/:movie_id", validate(movieValidation.getMovieById), movieController.getMovieById);
router.post("/add-movie", validate(movieValidation.addMovie), movieController.addMovie);
router.patch('/:movie_id', validate(movieValidation.updateMovie), movieController.updateMovie)



module.exports = router;
