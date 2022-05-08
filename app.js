import express from "express";
import path from "path";
import bodyParser from "body-parser";
var current = new Date();

const app = express();

const __dirname = path.resolve();

const myLogger = function (req, res, next) {
  console.log("A new request received at " + current.toLocaleString());
};

// app.use(myLogger);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
  myLogger();
});

app.get("/contactUs", (req, res) => {
  res.render("contactUs");
  myLogger();
});

app.get("/ourServices", (req, res) => {
  res.render("ourServices");
  myLogger();
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
