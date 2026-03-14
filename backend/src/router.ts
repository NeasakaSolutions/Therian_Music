// Importaciones:
import { Router } from 'express';
import { body } from "express-validator"
import { createAccount, login } from './handlers';

// Instancias:
const router = Router()

// Autenticacion y regsitro:
router.post("/auth/register", 
// Validaciones:
    body("handle")
        .notEmpty()
        .withMessage("El handle no puede ir vacio."), 
    body("name")
        .notEmpty()
        .withMessage("El nombre no puede ir vacio."),
    body("email")
        .isEmail()
        .withMessage("El correo es invalido"),
    body("password")
        .isLength({min: 8})
        .withMessage("El password no puede ir vacio."),   
    createAccount);

router.post("/auth/login",
    body("email")
        .isEmail()
        .withMessage("El correo es invalido"),
    body("password")
        .notEmpty()
        .withMessage("El password no puede ir vacio."),
    login
);
export default router