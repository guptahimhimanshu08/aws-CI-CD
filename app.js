const express = require("express");

const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Elastic Beanstalk deployment successful 🚀"
  });
});

// Health check (important)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// THIS IS CRITICAL
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});