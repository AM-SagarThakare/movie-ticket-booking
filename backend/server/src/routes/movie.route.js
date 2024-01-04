const { movieController } = require("../controllers");
const validate = require("../middlewares/validate");
const { movieValidation } = require("../validations");
const verifyToken = require("../middlewares/veriftToken");

const router = require("express").Router();


router.get("/", movieController.getAllMovies);

router.get("/:movie_id", [verifyToken,validate(movieValidation.getMovieById)], movieController.getMovieById);
router.post("/add-movie", [verifyToken,validate(movieValidation.addMovie)], movieController.addMovie);
router.patch('/:movie_id',[verifyToken, validate(movieValidation.updateMovie)], movieController.updateMovie)



module.exports = router;
