import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"
interface IAuthenticationRequest {
    email: string;
    password: string;
}
export class AuthenticateUserService {
    async execute({email, password}: IAuthenticationRequest) {
        const usersRepository = getCustomRepository(UsersRepository)

        const user= await usersRepository.findOne({email})

        if(!user) {
            throw new Error("Email/Password incorrect");
        };

      const passwordMatch = await compare(password, user.password)

       if(!passwordMatch) { 
        throw new Error("Email/Password incorrect")
    };

    const token = sign({email: user.email}, "dc84e80e2b7a85f498366aa981d5dcb7", {
        subject: user.id,
        expiresIn: "1d"
    });
    return token; 

    };
};


