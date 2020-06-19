const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

<<<<<<< HEAD
app.get("/user", (req, res) => res.send("to be implemented").status(400));
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
=======
app.get("/login",(req,res)=>{res.send("to be implemented").status(200)})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
>>>>>>> 0946490ef3a394ec9d4d805eacf962a53f49572b
