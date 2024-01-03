import service from "../middlewares/interceptor";

const addTickets = async (payload) => {
  return await service.post("/ticket/add-ticket", payload);
};
const getTicket = async (ticket_id) => {
  return await service.get(`/ticket/${ticket_id}`);
};

const updateServiceById = async (ticket_id, payload) => {
  return await service.patch(`/ticket/${ticket_id}`, payload)
}

export { addTickets, getTicket, updateServiceById };
