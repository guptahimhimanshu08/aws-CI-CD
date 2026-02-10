const express = require("express");
const app = express();

/**
 * Root endpoint – pipeline verification
 */
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "CI/CD pipeline deployment successful 🚀",
    timestamp: new Date().toISOString()
  });
});

/**
 * Health check endpoint – EB uses this
 */
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

/**
 * EB injects PORT automatically
 */
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});