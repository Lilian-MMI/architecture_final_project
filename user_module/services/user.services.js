const userDAO = require("../dao/user.dao");

exports.register = async (body) => {
  const user = ({ email, password, username } = body);
  return await userDAO.register(user);
};

exports.login = async (body) => {
  const user = ({ email, password } = body);
  return await userDAO.login(user);
};

exports.logout = async () => {
  return await userDAO.logout();
};
