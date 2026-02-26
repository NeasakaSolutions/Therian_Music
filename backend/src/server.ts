// Importaciones:
import express from "express";
import router from "./router";
import { connectDB } from "./config/db";
import "dotenv/config";

// Instancia del servidor:
const app = express();

// Llamando a la funcion de conexion de la base de datos:
connectDB();

app.use(express.json());
// Router para todas las rutas:
app.use("/", router);

// Exportacion de express a otras partes del codigo
export default app

