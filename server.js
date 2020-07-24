const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const checkScopes = require("express-jwt-authz");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerminute: 5,
    jwksUri: `https://rtakkal-dev.auth0.com/.well-known/jwks.json`,
  }),

  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

const app = express();

app.get("/public", (req, res) => {
  res.json({
    message: "Hello from public API",
  });
});

app.get("/private", checkJwt, (req, res) => {
  res.json({
    message: "Hello from private API",
  });
});

app.get("/courses", checkJwt, checkScopes(["read:courses"]), (req, res) => {
  res.json({
    courses: [
      {
        id: "123455",
        description: "Rakesh Pluralsight",
      },
      {
        id: "54321",
        description: "Vyhsu Pluralsight",
      },
    ],
  });
});

app.listen(3001);
console.log(`App is listening on : ${process.env.REACT_APP_AUTH0_API_URL}`);
