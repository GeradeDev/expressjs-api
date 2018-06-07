
var express = require("express");

var app = new express();
var port = 3000;

app.listen(port, function () {
    console.log("App is running @ " + port);
});

var profileRouter = new express.Router();

profileRouter.route("/profile")
    .get(function (req, res) {
        res.json({ Name: "Gerade", title: "Mr", surname: "Geldenhuys"})
    });

app.use("/api",profileRouter);