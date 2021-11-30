const axios = require("axios");
const url = require("url");

module.exports = (app) => {
    // L'utilisateur demande ses scores
    app.post("/api/scores/", function(req, res) {

        if (!req.cookies.jwt) {
            return res.status(403).json({ error: { authentification: "Aucun token fourni" } });
        }

        axios.post(`http://localhost:8081/scores`, {...req.body, token: req.cookies.jwt })
            .then(function(reponse) {
                res.status(200).send(reponse.data);
            })
            .catch(function(erreur) {
                res.status(erreur.response.status ? erreur.response.status : 404)
                    .json({
                        error: erreur.response.data.error
                    });
            });
    });

    // L'utilisateur demande un score
    app.get("/api/scores/:id", function(req, res) {

        if (!req.cookies.jwt) {
            return res.status(403).json({ error: { authentification: "Aucun token fourni" } });
        }

        let id = req.params.id;
        axios.post(`http://localhost:8081/scores/${id}`, {...req.body, token: req.cookies.jwt })
            .then(function(reponse) {
                res.status(200).send(reponse.data);
            })
            .catch(function(erreur) {
                res.status(erreur.response.status ? erreur.response.status : 404)
                    .json({
                        error: erreur.response.data.error
                    });
            });
    });
};