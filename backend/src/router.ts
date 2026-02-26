// Importaciones:
import { Router } from "express";

// INstancia del router:
const router = Router();

// AUtenticacion y registro:
router.post("/auth/register", (req, res) => {
    console.log(req.body);
});

// Exportacion del router a otras partes del codigo:
export default router


