import service from "../middlewares/interceptor"

const addTickets = (payload)=>{
    return service.post('/ticket/add-ticket',payload)
}

export {
    addTickets
}