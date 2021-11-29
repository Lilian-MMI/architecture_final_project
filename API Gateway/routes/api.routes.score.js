const axios = require("axios");
const url = require("url");

module.exports = (app) => {
    // L'utilisateur demande ses scores
    app.post("/api/scores/", function(req, res) {
        axios({
                method: "post",
                url: `http://localhost:8081/scores`,
                data: req.body,
            })
            .then(function(reponse) {
                res.status(200).send(reponse.data);
            })
            .catch(function(erreur) {
                res.charset = "utf-8";
                res.status(erreur.response.status ? erreur.response.status : 404)
                    .json({
                        error: erreur.response.data.error
                    });
            });
    });

    // L'utilisateur demande un score
    app.get("/api/scores/:id", function(req, res) {
        let id = req.params.id;
        axios({
                method: "post",
                url: `http://localhost:8081/score/${id}`,
                data: req.body,
            })
            .then(function(reponse) {
                res.status(200).send(reponse.data);
            })
            .catch(function(erreur) {
                res.charset = "utf-8";
                res.status(erreur.response.status ? erreur.response.status : 404)
                    .json({
                        error: erreur.response.data.error
                    });
            });
    });
};