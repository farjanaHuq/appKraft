var express = require('express');  //Node.js web application framework
var app = express();  //server object

var PORT = process.env.PORT||8080;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

var htmlRoute =require("./routes/htmlRoutes.js");
app.use(htmlRoute);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

