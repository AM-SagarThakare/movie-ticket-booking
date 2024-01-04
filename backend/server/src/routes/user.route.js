const router = require("express").Router();
const theatreRoute = require("./theatre.route");
const movieRoute = require("./movie.route");
const showRoute = require('./show.route')
const ticketRoute = require('./ticket.route')

const userRoutes =  [

    { path: "/theatre", route: theatreRoute }, //base epath for theatre routes
    { path: "/movie", route: movieRoute }, //base epath for theatre routes
    { path: "/show", route: showRoute }, //base epath for show routes
    { path: "/ticket", route: ticketRoute }, //base path for ticket routes
]

userRoutes.map((route) => {
    router.use(route.path, route.route);
  });
module.exports = router;
