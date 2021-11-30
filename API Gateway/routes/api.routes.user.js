const axios = require("axios");

module.exports = (app) => {
    app.post("/api/users/register", function(req, res) {

        if (!req.cookies.jwt) {
            return res.status(403).json({ error: { authentification: "Aucun token fourni" } });
        }

        axios.post(`http://localhost:8080/users/register`, {...req.body, token: req.cookies.jwt })
            .then(function(reponse) {
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
            .catch(function(erreur) {
                res.status(erreur.response.status ? erreur.response.status : 404).json({
                    error: erreur.response.data.error,
                });
            });
    });

    app.post("/api/users/validate", function(req, res) {

        if (!req.cookies.jwt) {
            return res.status(403).json({ error: { authentification: "Aucun token fourni" } });
        }

        axios.post(`http://localhost:8080/users/validate`, {...req.body, token: req.cookies.jwt })
            .then(function(reponse) {
                res.json(reponse);
            })
            .catch(function(erreur) {
                res.status(erreur.response.status ? erreur.response.status : 404).json({
                    error: erreur.response.data.error,
                });
            });
    });

    app.post("/api/users/login", function(req, res) {

        if (!req.cookies.jwt) {
            return res.status(403).json({ error: { authentification: "Aucun token fourni" } });
        }

        axios.post(`http://localhost:8080/users/login`, {...req.body, token: req.cookies.jwt })
            .then(function(reponse) {
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
            .catch(function(erreur) {
                res.status(erreur.response.status ? erreur.response.status : 404).json({
                    error: erreur.response.data.error,
                });
            });
    });
};