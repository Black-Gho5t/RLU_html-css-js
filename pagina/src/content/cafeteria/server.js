const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos (usando la URL completa)
const dbUrl = new URL('mysql://uep0sf9gforwt9su:x9iC6jVhIIH4Qm7mThU6@bglgjx2rerraynyi2hnr-mysql.services.clever-cloud.com:3306/bglgjx2rerraynyi2hnr');

const connection = mysql.createConnection({
  host: dbUrl.hostname,
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.substring(1),
  port: dbUrl.port,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar:", err.message);
  } else {
    console.log("✅ Conexión exitosa a MySQL");
  }
});

// Ruta de prueba
app.get("/usuarios", (req, res) => {
  connection.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});


const path = require('path');

// Servir archivo index.html en la raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
