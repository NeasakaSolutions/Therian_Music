// Importaciones:
import { Router } from "express";
import User from "./models/User";

// INstancia del router:
const router = Router();

// AUtenticacion y registro:
router.post("/auth/register", async(req, res) => {
    // Crear usuario:
    const user = new User(req.body);
    await user.save();

    res.send("Rgistro creado correctamente.")
});

// Exportacion del router a otras partes del codigo:
export default router


