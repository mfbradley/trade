// dependencies
var express = reqire("express");

// models
var db = require("./app/models")

// express
var PORT = process.env.PORT || 8080
var app = express();

// data parsing/middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files from public folder
app.use(express.static("public"));

// routes
require("./app/routes/htmlRoutes.js")(app);
require("./app/routes/apiRoutes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("app listening on http://localhost:" + PORT)
    })
})