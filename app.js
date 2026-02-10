const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API deployed successfully 🚀" });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});