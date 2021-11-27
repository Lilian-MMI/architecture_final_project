const axios = require("axios");

exports.verifyToken = (req, res, next) => {
  const { token } = req.body;

  if (!token)
    res.status(403).send({
      message: "No token provided!",
    });

  axios
    .post("http://172.20.0.2:8080/users/validate", { token })
    .then((response) => {
      if (response.status === 200) {
        req["userId"] = response.data._id;
        return next();
      }

      res.status(403).send({
        message: "Unauthorized!",
      });
    })
    .catch(() => {
      res.status(403).send({
        message: "Unauthorized!",
      });
    });
};
