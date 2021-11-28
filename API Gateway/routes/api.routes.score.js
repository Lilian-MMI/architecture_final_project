const axios = require("axios");
const url = require("url");

module.exports = (app) => {
  // L'utilisateur demande ses scores
  app.post("/api/scores/", function (req, res) {
    axios({
      method: "post",
      url: `http://localhost:8081/scores`,
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
            methode: "post: /api/scores",
            message: "Erreur dans la demande des scores !",
          },
        });
      });
  });

  // L'utilisateur demande un score
  app.get("/api/scores/:id", function (req, res) {
    let id = req.params.id;
    axios({
      method: "post",
      url: `http://localhost:8081/score/${id}`,
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
            methode: "post: /api/score",
            message: "Erreur lors de la demande du score !",
          },
        });
      });
  });
};
