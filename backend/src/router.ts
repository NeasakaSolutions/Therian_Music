// Importaciones:
import { Router } from 'express';

// Instancia del router:
const router = Router()

// Autenticacion y regsitro:
router.post("/auth/register", (req, res) => {
    console.log(req.body);
});

export default router