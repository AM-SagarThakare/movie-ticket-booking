const express = require("express");
const router = express.Router();

const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const theatreRoute = require("./theatre.route");
const movieRoute = require("./movie.route");

const defaultRoutes = [
  { path: "/auth", route: authRoute }, // base path for auth routes
  { path: "/user", route: userRoute }, // base path for user routes
  { path: "/theatre", route: theatreRoute }, //base epath for theatre routes
  { path: "/movie", route: movieRoute }, //base epath for theatre routes
];

defaultRoutes.map((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
