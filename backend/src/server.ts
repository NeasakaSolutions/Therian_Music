// Importaciones:
import express from "express";
import router from "./router";

// Instancia del servidor:
const app = express();

app.use(express.json());
// Router para todas las rutas:
app.use("/", router);

// Exportacion de express a otras partes del codigo
export default app

