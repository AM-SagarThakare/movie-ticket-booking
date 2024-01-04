const { showController } = require("../controllers");
const validate = require("../middlewares/validate");
const verifyToken = require("../middlewares/veriftToken");
const { showValidation } = require("../validations");

const router = require("express").Router();

router.get('/:movie_id/:theatre_id/:time',[verifyToken,validate(showValidation.getShow)], showController.getShow)
router.post('/add-show',verifyToken,showController.addShow)

module.exports = router