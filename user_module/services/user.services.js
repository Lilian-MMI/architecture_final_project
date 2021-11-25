const userDAO = require("../dao/user.dao");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/* Create Token */
const expiresIn = 6000; // 1 * 24 * 60 * 60; -> 1 journée (in s)
const createToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    config.secret,
    {
      expiresIn,
    }
  );
};

exports.register = (req, res) => {
  try {
    if (!req.body.password)
      return res.status(406).send({
        message: "Un mot de passe est requis",
      });

    if (!req.body.email)
      return res.status(406).send({
        message: "L'email est requis",
      });

    if (!req.body.username)
      return res.status(406).send({
        message: "Un nom d'utilisateur est requis",
      });

    const user = {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
    };

    const userCreadted = userDAO.register(user);

    return res.status(201).send({ userCreadted });
  } catch (err) {
    return res.status(500).send(err);
  }
};
