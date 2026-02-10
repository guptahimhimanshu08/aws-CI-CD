const express = require("express");
const app = express();

// ROOT PATH — THIS IS NOW YOUR HEALTH CHECK
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Application is healthy"
  });
});

// Optional secondary health endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});