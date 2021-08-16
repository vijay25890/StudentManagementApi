const express = require("express");
require("./Database/conn");
const StudentData = require("./Database/Models/index");
const router = require("./API/index");

const app = express();
app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log("server is running ✔");
});
