//copyleft by harsha
//new mongodb models need to be added.
//tweaking the ifle for the tagging
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/signout", (req, res) =>
  res.send("signout not implemented").status(200)
);
app.delete("/user", (req, res) => {
  res.send("user deleted").status(200);
});
//also done by harsha with love
