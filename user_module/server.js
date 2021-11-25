const express = require("express");
const mongoose = require("mongoose");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.json());

require("./routes/user.routes")(app);

app.get("/", (req, res) => {
  res.send("Hello World From User");
});

const dbURI =
  process.env.DB_URI ||
  "mongodb+srv://tp_final_username:tp_final_password@cluster.3udzt.mongodb.net/cluster?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log("\x1b[33m%s\x1b[0m", `Server listen on port : ${PORT} 🚀`)
    );
  })
  .catch((err) => console.log(err));
