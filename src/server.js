const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("../model/config");
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Домашняя страница. Бэк работает"
 });
});
const PORT = process.env.PORT || 3000;

db.sequelize.sync();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
