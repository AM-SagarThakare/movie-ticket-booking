const { theatreController } = require("../controllers");
const validate = require("../middlewares/validate");
const { theatreValidation } = require("../validations");

const router = require("express").Router();

router.post("/", [validate(theatreValidation.addTheatre)], theatreController.addTheatre);

router.get("/", (req, res) => {
  res.send("in get");
});

module.exports = router;
