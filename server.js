const express = require('express');

const PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// routing
const routes = require("./controllers/burgers_controller.js");

app.use(routes);


app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});