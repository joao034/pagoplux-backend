import { Router } from "express";
import { AuthController } from "../controllers";

export const userRoutes = Router();

userRoutes.post('/login', AuthController.login );
userRoutes.post('/register', AuthController.register);

