const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT_API = 3001;
const amqp = require("amqplib/callback_api");

/* ONLY ACCEPT Request*/
let corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
};

/* SETUP APP MIDDLEWARE */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(morgan("dev"));

/* SETUP RENDER */
app.set("views", "./views");
app.set("view engine", "ejs");

/* IMPORT ROUTES */
require("./routes/api.routes.user")(app);
require("./routes/api.routes.game")(app);
require("./routes/api.routes.score")(app);

// Si aucune route n'a été trouvée
app.get('/.*/', function(req, res) {

    res.writeHead(404);
    res.end("Erreur 404 : URL " + req.url + " inconnue !")

});

/* APP LISTEN ON */
app.listen(PORT_API, () => {
    console.log("\x1b[33m%s\x1b[0m", `Server API Gateway is running on port ${PORT_API} ✔`);
});