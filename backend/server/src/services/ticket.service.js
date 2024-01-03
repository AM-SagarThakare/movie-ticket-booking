const { Ticket } = require("../models")

const addTicket = async (payload)=>{
    return await Ticket.create(payload)
}

module.exports = {addTicket}