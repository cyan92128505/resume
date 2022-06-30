var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.static(process.cwd(), "www")); //Serves resources from public folder
app.listen(3000, function () {});
