const axios = require('axios');
const url = require('url');

module.exports = (app) => {

    // L'utilisateur veut créer un compte
    app.post('/api/users/register', function(req, res) {

        axios({
                method: 'post',
                url: `http://localhost:8080/users/register`,
                data: req.body
            })
            .then(function(reponse) {
                console.log(reponse.data);

                //JSON object to be added to cookie
                let token = {
                    "token": reponse.data.token
                }

                let expiresIn = 8000;
                res.cookie("jwt", token, {

                    httpOnly: true,

                    maxAge: expiresIn * 1000,

                    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",

                    secure: process.env.NODE_ENV === "production" ? true : false,

                });

                let headerPerso = {
                    "Content-Type": "text/html",
                    "token": reponse.data.token
                }
                res.set(headerPerso);
                res.charset = "utf-8";
                res.status(200);
                //res.json(reponse.data);
                //res.send(reponse.data);
                res.redirect(`http://localhost:3000/game.routes.accueil?_id=${reponse.data.user._id}&username=${reponse.data.user.username}&email=${reponse.data.user.email}&token${reponse.data.user.token}`);

            })
            .catch(function(erreur) {
                res.charset = "utf-8";
                res.status(404)
                    .json({
                        error: {
                            origin: "api.routes",
                            methode: "post: /api/users/register",
                            message: "Erreur de création du compte !"
                        }
                    });
            });
    });

    // Valider un token
    app.post('/api/users/validate', function(req, res) {

        axios({
                method: 'post',
                url: `http://localhost:8080/users/validate`,
                data: req.body
            })
            .then(function(reponse) {
                res.charset = "utf-8";
                res.json("Token valide");

            })
            .catch(function(erreur) {
                res.charset = "utf-8";
                res.status(404)
                    .json({
                        error: {
                            origin: "api.routes",
                            methode: "get: /api/users/validate",
                            message: "Erreur de validation du token !"
                        }
                    });
            });
    });

    // L'utilisateur demande à s'identifier
    app.post('/api/users/login', function(req, res) {

        axios({
                method: 'post',
                url: `http://localhost:8080/users/login`,
                data: req.body
            })
            .then(function(reponse) {
                console.log(reponse.data);

                //JSON object to be added to cookie
                let token = {
                    "token": reponse.data.token
                }
                let expiresIn = 8000;
                res.cookie("jwt", token, {

                    httpOnly: true,

                    maxAge: expiresIn * 1000,

                    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",

                    secure: process.env.NODE_ENV === "production" ? true : false,

                });

                /*res.charset = "utf-8";
                res.status(200)
                    .json(reponse.data);*/

                let headerPerso = {
                    "Content-Type": "text/html",
                    "token": reponse.data.token
                }
                res.set(headerPerso);
                res.charset = "utf-8";
                res.status(200);
                res.redirect(`http://localhost:3000/game.routes.accueil?_id=${reponse.data.user._id}&username=${reponse.data.user.username}&email=${reponse.data.user.email}&token${reponse.data.user.token}`);


            })
            .catch(function(erreur) {
                res.charset = "utf-8";
                res.status(404)
                    .json({
                        error: {
                            origin: "api.routes",
                            methode: "post: /api/users/register",
                            message: "Erreur d'identification de l'utilisateur !"
                        }
                    });
            });
    });
};