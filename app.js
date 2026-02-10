const express = require("express");

const app = express();

// Root endpoint (used by EB health checks)
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Elastic Beanstalk Node app is running! Hurrah!!! 🚀"
  });
});

// Explicit health endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// IMPORTANT: EB injects PORT
const PORT = process.env.PORT;

// FAIL FAST if PORT is missing (helps debugging)
if (!PORT) {
  console.error("PORT environment variable is not defined");
  process.exit(1);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});