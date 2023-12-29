const { movieController } = require("../controllers");
const validate = require("../middlewares/validate");
const { movieValidation } = require("../validations");

const router = require("express").Router();

router.post("/add-movie",validate(movieValidation.addMovie) ,movieController.addMovie);

module.exports = router;
