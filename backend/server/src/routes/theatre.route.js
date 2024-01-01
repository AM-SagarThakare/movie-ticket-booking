const { theatreController } = require("../controllers");
const validate = require("../middlewares/validate");
const { theatreValidation, movieValidation } = require("../validations");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("in get");
});

router.patch("/:theatre_id", validate(theatreValidation.updateTheatreById), theatreController.updateTheatreById)

router.post("/add-theatre", validate(theatreValidation.addTheatre), theatreController.addTheatre
);

module.exports = router;
