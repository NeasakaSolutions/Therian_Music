// Importaciones:
import server from "./server";

// Variables:
const port = process.env.PORT || 4000;

// Generar el servidor
server.listen(port, () => {
    console.log("Servidor funcionando.")
});

