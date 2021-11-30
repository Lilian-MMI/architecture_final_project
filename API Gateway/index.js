const express = require("express");
<<<<<<< HEAD
const morgan = require("morgan");
const cors = require("cors");
=======
const morgan = require("morgan"); // pour les log
const cors = require("cors"); // Pour accèpter uniquement les Requêtes de telle URL
>>>>>>> 48392efff71eaf834a202fc735a6949c4547a430
const PORT_API = 3001;
const cookieParser = require("cookie-parser");
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
app.use(cookieParser());

/* IMPORT ROUTES */
require("./routes/api.routes.user")(app);
require("./routes/api.routes.game")(app);
require("./routes/api.routes.score")(app);

// Si aucune route n'a été trouvée
<<<<<<< HEAD
app.get('/.*/', function(req, res) {

    res.writeHead(404);
    res.end("Erreur 404 : URL " + req.url + " inconnue !")

=======
app.get("/.*/", function (req, res) {
  res.writeHead(404);
  resend("Erreur 404 : URL " + req.url + " inconnue !");
>>>>>>> 48392efff71eaf834a202fc735a6949c4547a430
});

/* APP LISTEN ON */
app.listen(PORT_API, () => {
<<<<<<< HEAD
    console.log("\x1b[33m%s\x1b[0m", `Server API Gateway is running on port ${PORT_API} ✔`);
});
=======
  console.log(
    "\x1b[33m%s\x1b[0m",
    `Server API Gateway is running on port ${PORT_API} ✔`
  );
});
>>>>>>> 48392efff71eaf834a202fc735a6949c4547a430
