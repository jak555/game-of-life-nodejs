const express = require("express");
const compression = require("compression");

const _port = 8080;
const _app_folder = 'dist/game-of-life-nodejs';

const app = express();
app.use(compression());


// ---- SERVE STATIC FILES ---- //
app.use('*.*', express.static(_app_folder, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.use('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: _app_folder});
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, function () {
    console.log("Node server " + app.name + " started on http://localhost:" + _port);
});