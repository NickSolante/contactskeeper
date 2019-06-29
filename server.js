const express = require("express");
const connectDB = require("./config/db");
var bodyParser = require("body-parser");

const app = express();

//connect Database
connectDB();

//init Middleware body parser is now a part of node
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "welcome to the contace keeper api" })
);

//define routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
