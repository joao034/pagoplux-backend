import { Request, Response } from "express";
import { UserService } from "../services/";
import { handleError } from "../helpers/errors";

export class AuthController{

    static async login( req: Request, res: Response ){

        const { username, password } = req.body;

        if( !username || !password ) {
            res.status(400).json({ error: 'Usuario y contraseña son requeridos!'})
            return;
        }

        try {
            const user = await UserService.loginUser( username, password );
            res.status(200).json( { message: 'Success', user } );
        } catch (error) {
            handleError(error, res);
        }

    }

    static async register( req: Request, res: Response ){
        const { username, password } = req.body;

         if( !username || !password ) {
            res
              .status(400)
              .json({ message: "Usuario y contraseña son requeridos!" });
            return;
        }

        try {
            const newUser = await UserService.registerUser(username, password);
            res.status(201).json(newUser);

        } catch (error) {
            handleError( error, res );
        }

    }

}