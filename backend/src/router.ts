// Importaciones:
import { Router } from "express";
import User from "./models/User";
import { createAccount } from "./handlers";

// INstancia del router:
const router = Router();

// AUtenticacion y registro:
router.post("/auth/register", createAccount);

// Exportacion del router a otras partes del codigo:
export default router


