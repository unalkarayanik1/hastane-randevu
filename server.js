const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Ana sayfa
app.get("/", (req, res) => {
  res.send(`
    <h1>Hastane Randevu Sistemi</h1>
    <a href="/randevu">Randevu Ara</a>
  `);
});

// Randevu + filtre sayfası
app.get("/randevu", (req, res) => {
  const { sehir, cinsiyet, uzmanlik } = req.query;

  // Örnek doktor listesi (fake data)
  const doktorlar = [
    { isim: "Dr. Ayşe", sehir: "İstanbul", cinsiyet: "Kadın", uzmanlik: "Cildiye" },
    { isim: "Dr. Mehmet", sehir: "Ankara", cinsiyet: "Erkek", uzmanlik: "Cildiye" },
    { isim: "Dr. Elif", sehir: "İstanbul", cinsiyet: "Kadın", uzmanlik: "Kardiyoloji" }
  ];

  let filtreli = doktorlar;

  if (sehir) {
    filtreli = filtreli.filter(d => d.sehir === sehir);
  }
  if (cinsiyet) {
    filtreli = filtreli.filter(d => d.cinsiyet === cinsiyet);
  }
  if (uzmanlik) {
    filtreli = filtreli.filter(d => d.uzmanlik === uzmanlik);
  }

  const liste = filtreli.map(d => `
    <li>${d.isim} - ${d.sehir} - ${d.cinsiyet} - ${d.uzmanlik}</li>
  `).join("");

  res.send(`
    <h2>Doktor Ara</h2>

    <form method="GET">
      Şehir:
      <select name="sehir">
        <option value="">Seç</option>
        <option>İstanbul</option>
        <option>Ankara</option>
      </select>

      Cinsiyet:
      <select name="cinsiyet">
        <option value="">Seç</option>
        <option>Kadın</option>
        <option>Erkek</option>
      </select>

      Uzmanlık:
      <select name="uzmanlik">
        <option value="">Seç</option>
        <option>Cildiye</option>
        <option>Kardiyoloji</option>
      </select>

      <button type="submit">Filtrele</button>
    </form>

    <h3>Sonuçlar</h3>
    <ul>
      ${liste || "Sonuç yok"}
    </ul>

    <a href="/">Ana Sayfa</a>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server Started on port " + PORT);
});
