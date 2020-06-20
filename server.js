const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", (req, res) => res.send("secret data received"));
//i also want to create merge conflict
//local dirty work
app.post("/users", (req, res) => res.send("secret data received"));
app.post("/signup", (req, res) => res.send("secret data received"));
app.post("/home", (req, res) => res.send("secret data received"));
app.post("/aboutus", (req, res) => res.send("secret data received"));
app.post("/contacus", (req, res) => res.send("secret data received"));
app.post("/jobs", (req, res) => res.send("secret data received"));
app.post("/importantInfo", (req, res) => res.send("secret data received"));
app.post("/404", (req, res) => res.send("secret data received"));
//local work
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
