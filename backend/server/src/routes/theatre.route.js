const { theatreController } = require("../controllers");
const validate = require("../middlewares/validate");
const { theatreValidation } = require("../validations");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("in get");
});

router.post(
  "/add-theatre",
  [validate(theatreValidation.addTheatre)],
  theatreController.addTheatre
);

module.exports = router;
