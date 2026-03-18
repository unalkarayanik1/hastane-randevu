const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hastane Randevu Sistemi Çalışıyor");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log("Server Started on port " + PORT);
});
