//copy left by harsha
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/signout", (req, res) =>
  res.send("signout not implemented").status(200)
);

//new data to be added
//local dirty work
app.post("/signup", (req, res) => res.send("secret data received"));
app.post("/home", (req, res) => res.send("secret data received"));
app.post("/aboutus", (req, res) => res.send("secret data received"));
app.post("/contactus", (req, res) => res.send("secret data received"));
app.post("/jobs", (req, res) => res.send("secret data received"));
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
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
//written by harsha with love and more love
