const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { User } = require("../models");
const { getUserById } = require("../services/user.service");
const { userService } = require("../services");

const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(403)
      .send({ message: "Token required for authentication" });
  }

  try {
    const payload = jwt.verify(token.slice(7), config.jwt.secret);

    if (payload.type === "access")
      req.user = await userService.getUserById(payload.sub);
    
  } catch (err) {
    return res.status(401).send({ message: "Invalid Token" });
  }
  return next();
};

module.exports = verifyToken;
