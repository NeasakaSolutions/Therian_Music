// router.ts
import { Router } from 'express';

const router = Router();

// Ruta de prueba simple
router.get('/', (req, res) => {
    res.send("Hola mundo desde router!");
});

// Autenticacion y regsitro:
router.post("/auth/register", (req, res) => {
    console.log(req.body);


    // Mandar respuesta al cliente
    res.json({ message: "Registro exitoso!" });
});

export default router;