// Importaciones:
const express = require("express");

// INstancia del servidor
const app = express();

// Generar el servidor
app.listen(4000, () => {
    console.log("Servidor funcionando.")
});

// Routing
app.get("/", (req, res) => {
    res.send("Hola mundo en express")
});
