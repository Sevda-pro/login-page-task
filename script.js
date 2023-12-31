const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs=require("fs")
// const router = require("./UserRoutes");

const app = express();
const port = 4000;
let x;
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// app.use("/api/v1", router);

app.get("/", (req, res) => {
  fs.readFile("read.txt","utf-8",(err,data)=>
  {
   res.send(`${data}<form action="/" method="POST">
    <input placeholder="Enter Your Message" type="text" name="message" id="message" />
    <input type="submit" value="Login" />
  </form>`)
  })
  })
    

app.post("/", (req, res) => {
  fs.appendFile("read.txt",`${req.body.message}  `,(err)=>{
    err?console.log(err):res.redirect("/")
  })
  // console.log(req.body.message);
});


app.get("/login", (req, res) => {
    res.send(`<form onsubmit="localStorage.setItem("username", document.getElementById('name').value)" action="/login" method="POST"><h1>REGISTER</h1>
    <input placeholder="Enter Your Name" type="text" name="name" id="name" />
    <input type="submit" value="Login" />
  </form>`);

  });
app.post("/login", (req, res) => {
    fs.appendFile("read.txt",`${req.body.name}-`,(err)=>{
      err?console.log(err):res.redirect("/")
    })
    // console.log(req.body.name);
    // console.log(req.body.message);
    
  });



app.listen(port, () => {
  console.log(`Server is Working on port: ${port}`);
});