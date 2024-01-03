import service from "../middlewares/interceptor";

const addTickets = (payload) => {
  return service.post("/ticket/add-ticket", payload);
};
const getTicket = (ticket_id) => {
  return service.get(`/ticket/${ticket_id}`);
};

export { addTickets, getTicket };
