import scoresRouter from "./routes/score.routes";
const express = require("express");
const morgan = require("morgan");
import { sequelize } from "./models/";

// Constants
const PORT = 8082;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/scores", scoresRouter);

/* CONNECT TO DATABASE */
sequelize.sync().catch((err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log("\x1b[33m%s\x1b[0m", `Server is running on port ${PORT} ✔`);
});
