const axios = require("axios");

module.exports = (app) => {
  app.post("/api/users/register", function (req, res) {
    axios({
      method: "post",
      url: `http://localhost:8080/users/register`,
      data: req.body,
    })
      .then(function (reponse) {
        // Cookie
        let token = {
          token: reponse.data.token,
        };

        let expiresIn = 8000;
        res.cookie("jwt", token, {
          httpOnly: true,

          maxAge: expiresIn * 1000,

          sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",

          secure: process.env.NODE_ENV === "production" ? true : false,
        });

        res.status(200).send(reponse.data);
      })
      .catch(function (erreur) {
        res.charset = "utf-8";
        res.status(erreur.response.status ? erreur.response.status : 404).json({
          error: erreur.response.data.error,
        });
      });
  });

  app.post("/api/users/validate", function (req, res) {
    axios({
      method: "post",
      url: `http://localhost:8080/users/validate`,
      data: req.body,
    })
      .then(function (reponse) {
        res.charset = "utf-8";
        res.json("Token valide");
      })
      .catch(function (erreur) {
        res.charset = "utf-8";
        res.status(erreur.response.status ? erreur.response.status : 404).json({
          error: erreur.response.data.error,
        });
      });
  });

  app.post("/api/users/login", function (req, res) {
    axios({
      method: "post",
      url: `http://localhost:8080/users/login`,
      data: req.body,
    })
      .then(function (reponse) {
        // Cookie
        let token = {
          token: reponse.data.token,
        };
        let expiresIn = 8000;
        res.cookie("jwt", token, {
          httpOnly: true,

          maxAge: expiresIn * 1000,

          sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",

          secure: process.env.NODE_ENV === "production" ? true : false,
        });

        res.status(200).send(reponse.data);
      })
      .catch(function (erreur) {
        res.charset = "utf-8";

        res.status(erreur.response.status ? erreur.response.status : 404).json({
          error: erreur.response.data.error,
        });
      });
  });
};
