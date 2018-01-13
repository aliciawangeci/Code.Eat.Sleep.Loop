const express = require("express");
const jwt = require("jsonwebtoken");

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Home" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the api" });
});

app.post("/api/post", (req, res) => {
  res.json({ message: "Post Created..." });
});

app.post("/api/login", (req, res) => {
  //mock user
  const user = {
    id: 1,
    username: "eric",
    email: "eric@gmail.com"
  };
  jwt.sign({ user }, "secreatkey", (err, token) => {
    res.json({ token });
  });
});

app.listen(port, () =>
  console.log(`App is running at port http://localhost:${port}`)
);
