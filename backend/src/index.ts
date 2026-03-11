import express from 'express';
import router from './router'; // apunta a router.ts directamente

const app = express();
const PORT = 4000;

// Middleware para que Express pueda leer JSON del body
app.use(express.json());

// Usar tu router
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
});