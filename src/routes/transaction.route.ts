import { Request, Response, Router } from "express";
import { TransactionController } from "../controllers";

export const transactionRoutes = Router();

transactionRoutes.get("/", TransactionController.getTransactionById);

