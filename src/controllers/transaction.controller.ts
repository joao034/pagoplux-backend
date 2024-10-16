import { Request, Response } from "express";
import { TransactionService } from "../services";
import { handleError } from "../helpers/errors";

export class TransactionController {
    
    static async getTransactionById( req: Request, res: Response ) {
        const id = req.query.id;

        if (!id) {
            res.status(400).json({ message: "Transaction id is required" });
            return;
        }

        try {
            const transactionData = await TransactionService.getTransactionByIdFromPagoPlux( String( id ) );
            res.status( 200 ).json( transactionData );
        } catch (error) {
            handleError( error, res );
        }
    }
}