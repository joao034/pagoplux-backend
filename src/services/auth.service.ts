import { bcryptAdapter } from "../helpers/adapters";
import { CustomError } from "../helpers/errors";
import { User } from "../models/";
import jwt from 'jsonwebtoken';

export class UserService{

    static async loginUser ( username: string, password: string ) {
        const user = await User.findOne( { username } );
        if ( !user ) throw CustomError.badRequest('El usuario no existe!');

        const isMatch = bcryptAdapter.compare( password, user.password );
        if( !isMatch ) throw CustomError.badRequest('Contraseña incorrecta');

        return { 
            userId: user.id, 
            username: user.username 
        };
    }

    static async registerUser( username: string, password: string ){

        const existUser = await User.findOne( { username } );
        if( existUser ) throw CustomError.badRequest('El usuario ya existe');

        try {
            const hashedPassword = bcryptAdapter.hash(password);
            const user = User.create({ username, password: hashedPassword });

            return user;
        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }
    }

}