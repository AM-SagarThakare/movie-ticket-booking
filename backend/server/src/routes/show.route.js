const { showController } = require("../controllers");
const validate = require("../middlewares/validate");
const { showValidation } = require("../validations");

const router = require("express").Router();

router.get('/:movie_id/:theatre_id/:time',validate(showValidation.getShow), showController.getShow)
router.post('/add-show',showController.addShow)

module.exports = router