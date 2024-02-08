const express = require("express");
const serverless = require("serverless-http");
const lockImageRoute = require("./lockImageRoute");

const app = express();

app.use(express.json());

// The lock image route / logic from lockImageRoute.js
app.use(lockImageRoute);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
