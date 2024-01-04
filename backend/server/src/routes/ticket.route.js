const { ticketController } = require("../controllers");
const validate = require("../middlewares/validate");
const verifyToken = require("../middlewares/veriftToken");
const { ticketValidation } = require("../validations");

const router = require("express").Router();

router.get(
  "/:ticket_id",
  [verifyToken, validate(ticketValidation.getTicketById)],
  ticketController.getTicketById
);
router.patch(
  "/:ticket_id",
  [verifyToken, validate(ticketValidation.updateTicketById)],
  ticketController.updateTicketById
);
router.post(
  "/add-ticket",
  [verifyToken, validate(ticketValidation.addTicket)],
  ticketController.addTicket
);

module.exports = router;
