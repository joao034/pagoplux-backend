import { Request, Response } from "express";
import { UserService } from "../services/auth.service";
import { CustomError, handleError } from "../helpers/errors";

export class AuthController{

    static async login( req: Request, res: Response ){

        const { username, password } = req.body;

        if( !username || !password ) {
            throw new CustomError( )
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

        try {
            
        if( !username || !password ) {
            res.status(400).json( { message: 'Username and password are required!' });
            return;
        }
            const newUser = await UserService.registerUser(username, password);

            res.status(201).json(newUser);
        } catch (error) {
            handleError( error, res );
        }

    }

}