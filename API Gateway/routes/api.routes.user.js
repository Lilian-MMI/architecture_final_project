const axios = require("axios");
const url = require("url");

module.exports = (app) => {
  // L'utilisateur veut créer un compte
  app.post("/api/users/register", function (req, res) {
    axios({
      method: "post",
      url: `http://localhost:8080/users/register`,
      data: req.body,
    })
      .then(function (reponse) {
        res.charset = "utf-8";
        res.status(200).json(reponse.data);
      })
      .catch(function (erreur) {
        res.charset = "utf-8";
        res.status(404).json({
          error: {
            origin: "api.routes",
            methode: "post: /api/users/register",
            message: "Erreur de création du compte !",
          },
        });
      });
  });

  // Valider un token
  app.post("/api/users/validate", function (req, res) {
    axios({
      method: "post",
      url: `http://localhost:8080/users/validate`,
      data: req.body,
    })
      .then(function (reponse) {
        res.charset = "utf-8";
        res.status(200).json("Token valide");
      })
      .catch(function (erreur) {
        res.charset = "utf-8";
        res.status(404).json({
          error: {
            origin: "api.routes",
            methode: "get: /api/users/validate",
            message: "Erreur de validation du token !",
          },
        });
      });
  });

  // L'utilisateur demande à s'identifier
  app.post("/api/users/login", function (req, res) {
    axios({
      method: "post",
      url: `http://localhost:8080/users/login`,
      data: req.body,
    })
      .then(function (reponse) {
        res.charset = "utf-8";
        res.status(200).json(reponse.data);
      })
      .catch(function (erreur) {
        res.charset = "utf-8";
        res.status(404).json({
          error: {
            origin: "api.routes",
            methode: "post: /api/users/register",
            message: erreur.message,
          },
        });
      });
  });
};
