const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", (req, res) => res.send("secret data received"));
//i also want to create merge conflict
//local dirty work
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
//local work
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
