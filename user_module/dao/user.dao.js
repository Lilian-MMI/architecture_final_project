const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret.key");

// 1 * 24 * 60 * 60; -> 1 days (in s)
const createToken = (id, expiresIn = 1 * 24 * 60 * 60) => {
  return jwt.sign(
    {
      id,
    },
    secret.key,
    {
      expiresIn,
    }
  );
};

exports.register = async (user) => {
  const userCreated = await User.create(user);

  return {
    user: userCreated,
    token: createToken(userCreated._id),
  };
};

exports.login = async (user) => {
  const userLogged = await User.login(email, password);

  return {
    user: userLogged,
    token: createToken(user._id),
  };
};

exports.logout = () => {
  return {
    token: createToken("", 1),
  };
};
