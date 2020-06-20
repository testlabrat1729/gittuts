const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", (req, res) => res.send("secret data received"));

app.post("/signup", (req, res) => res.send("secret data received"));

app.post("/signout", (req, res) =>
  res.send("signout not implemented").status(200)
);

app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.post("/", (req, res) => res.send("secret data received"));
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
