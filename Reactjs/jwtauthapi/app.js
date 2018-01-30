const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const port = 4500;

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to jwt api"
  })
})

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData)=>{
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData
      })
    }
  })
})

app.post("/api/login", (req, res)=>{
  // Mock User
  const user = {
    id: 1,
    username: "erick",
    email: "erick@merglabs.com"
  }
  jwt.sign({user}, "secretkey", { expiresIn: "30s" }, (err, token)=>{
    res.json({
      token
    })
  });
})

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token Function
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  // check to see if its not undefined
  if(typeof bearerHeader !== "undefined"){
    // split at the space
    const bearer = bearerHeader.split(" ");
    // get token from array
    const bearerToken = bearer[1];
    // set the token
    req.token = bearerToken;
    // Next Middleware
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`)
})
