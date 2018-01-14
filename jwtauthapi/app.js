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

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post Created",
        authData
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  // Mock user "Should be from the database"
  const user = {
    id: 1,
    username: "eric",
    email: "eric@gmail.com"
  };
  jwt.sign({ user }, "secretkey", (err, token) => {
    res.json({ token });
  });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.header["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(port, () =>
  console.log(`App is running at port http://localhost:${port}`)
);
