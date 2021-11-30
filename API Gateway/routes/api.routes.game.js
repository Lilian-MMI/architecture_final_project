const axios = require("axios");
const url = require("url");

module.exports = (app) => {
    // L'utilisateur demande les catégories de quizz
    app.get("/api/games", function(req, res) {

        if (!req.cookies.jwt) {
            return res.status(403).json({ error: { authentification: "Aucun token fourni" } });
        }

        const params = new url.URLSearchParams({...req.query });
        let url2 = `http://0.0.0.0:8081/quizz?${params}`;

        axios.post(url2, { token: req.cookies.jwt })
            .then(function(reponse) {
                res.charset = "utf-8";
                res.status(200).json(reponse.data);
            })
            .catch(function(erreur) {
                res.charset = "utf-8";
                res.status(erreur.response.status ? erreur.response.status : 404)
                    .json({
                        error: erreur.response.data.error
                    });
            });

    });

    // L'utilisateur demande un quizz
    app.get("/api/games/:gameId", function(req, res) {

        if (!req.cookies.jwt) {
            return res.status(403).json({ error: { authentification: "Aucun token fourni" } });
        }

        let id = req.params.gameId;
        console.log(id);
        axios
            .post(`http://0.0.0.0:8081/quizz/${id}`, { token: req.cookies.jwt })
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

    // L'utilisateur demande la vérification de ses réponses et son score
    app.post("/api/games/answer", function(req, res) {

        if (!req.cookies.jwt) {
            return res.status(403).json({ error: { authentification: "Aucun token fourni" } });
        }

        axios.post(`http://localhost:8081/quizz/answer`, { token: req.cookies.jwt })
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