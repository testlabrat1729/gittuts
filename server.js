const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", (req, res) => res.send("secret data received"));

app.post("/signup", (req, res) => res.send("secret data received"));

app.post("/signout", (req, res) =>
  res.send("signout not implemented").status(200)
);

//new data to be added
//local dirty work
app.post("/users", (req, res) => res.send("secret data received"));
app.post("/signup", (req, res) => res.send("secret data received"));
app.post("/home", (req, res) => res.send("secret data received"));
app.post("/aboutus", (req, res) => res.send("secret data received"));
app.post("/contacus", (req, res) => res.send("secret data received"));
app.post("/jobs", (req, res) => res.send("secret data received"));
app.post("/importantInfo", (req, res) => res.send("secret data received"));
app.post("/404", (req, res) => res.send("secret data received"));
//very important work
//need more dirty work
//asfdsa
//af
//asf
//sadf
//safd
//as
//fas
//df
//sdaf
//sadf
//sa
//f
//asf
//asf
//
//local changes
//
//
//sadf
//sa
//fsa
//f
//asf
//saf
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
