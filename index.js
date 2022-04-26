var express = require("express");

const databaseConfig = require('./knexfile'); //относительный путь к файлу настроек
var knex = require('knex')(databaseConfig);

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./view");

app.listen(3000);

// app.get("/", function(request, response)  {
   
//     response.render("homePage");
// });

app.get("/test", function(request, response)  {
   
    response.render("testPage");
});

app.get("", async (req, res) => {
    const usersList = await knex
    .select("*")
    .from("user")
    res.json(usersList);
});
