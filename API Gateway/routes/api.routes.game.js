const axios = require("axios");
const url = require("url");

module.exports = (app) => {
  // L'utilisateur demande les catégories de quizz
  app.get("/api/games", function (req, res) {
    let payload = { label: req.query.label, difficulty: req.query.difficulty };
    const params = new url.URLSearchParams(payload);
    let url2 = `http://0.0.0.0:8081/quizz?${params}`;

    axios
      .get(url2)
      .then(function (reponse) {
        res.charset = "utf-8";
        res.status(200).json(reponse.data);
      })
      .catch(function (erreur) {
        res.charset = "utf-8";
        res.status(erreur.response.status ? erreur.response.status : 404).json({
          error: erreur.response.data.error,
        });
      });
  });

  // L'utilisateur demande un quizz
  app.get("/api/games/:gameId", function (req, res) {
    let id = req.params.gameId;
    axios
      .get({
        // method: 'get',
        url: `http://0.0.0.0:8081/quizz/${id}`,
      })
      .then(function (reponse) {
        res.status(200).send(reponse.data);
      })
      .catch(function (erreur) {
        res.charset = "utf-8";
        res.status(erreur.response.status ? erreur.response.status : 404).json({
          error: erreur.response.data.error,
        });
      });
  });

  // L'utilisateur demande la vérification de ses réponses et son score
  app.post("/api/games/answer", function (req, res) {
    axios({
      method: "post",
      url: `http://localhost:8081/quizz/answer`,
      data: req.body,
    })
      .then(function (reponse) {
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
