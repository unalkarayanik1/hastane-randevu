const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>YENI SISTEM CALISIYOR</h1>
    <a href="/randevu">Randevu Ara</a>
  `);
});

app.get("/randevu", (req, res) => {
  res.send(`
    <h2>FILTRE EKRANI AKTIF</h2>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server Started");
});
