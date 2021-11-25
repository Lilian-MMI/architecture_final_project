const userServices = require("../services/user.services");

module.exports = (app) => {
  app.post("/user/register", userServices.register);
};
