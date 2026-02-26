// Importaciones:
import express from "express";

// Variables:
const port = process.env.PORT || 4000;

// Instancia del servidor
const app = express();

// Routing
app.get("/", (req, res) => {
    res.send("Hola mundo en express")
});

// Generar el servidor
app.listen(port, () => {
    console.log("Servidor funcionando.")
});

