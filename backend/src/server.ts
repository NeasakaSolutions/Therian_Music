// Importaciones:
import express from "express"; // ESM Ecmascript module
import router from "./router";
import { connectDB } from "./config/db";
import "dotenv/config";

// Llamando a la funcion de la conexion a la BD:
connectDB();

// Instancia del servidor:
const app = express();


// Leer datos de formularios:
app.use(express.json());

// Usa el router para todas las rutas
app.use("/", router);

export default app



