
const { ticketController } = require("../controllers");
const validate = require("../middlewares/validate");
const { ticketValidation } = require("../validations");

const router = require("express").Router()

router.post('/add-ticket',validate(ticketValidation.addTicket),ticketController.addTicket)

module.exports = router