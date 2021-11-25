const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret.key");

/* Custom handle errors */
const handleErrors = (err) => {
  let errors = {};

  if (err.message === "unknow user") {
    errors.user = "Utilisateur et/ou mot de passe erronés";
  }

  if (err.code === 11000) {
    err.keyValue.username
      ? (errors.username = "Ce nom d'utilisateur est déjà pris")
      : (errors.email = "Cette addresse email existe déjà");
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

/* Create token user */
const expiresIn = 3 * 24 * 60 * 60; // 1 * 24 * 60 * 60; -> 3 days (in s)
const createToken = (id) => {
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

exports.register = (user) => {
  User.create(user)
    .then((userCreated) => {
      const token = createToken(userCreated._id);

      return [userCreated, token];
    })
    .catch((err) => console.log(err));
};
