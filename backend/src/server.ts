// Importaciones:
import express from "express"; // ESM Ecmascript module
import router from "./router";

// Instancia del servidor:
const app = express();

// Usa el router para todas las rutas
app.use("/", router);

// Leer datos de formularios:
app.use(express.json());

export default app