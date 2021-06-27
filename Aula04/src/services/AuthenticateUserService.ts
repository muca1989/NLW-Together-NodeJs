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
        // Verificar senha do usuario 
      const passwordMatch = await compare(password, user.password)

       if(!passwordMatch) { 
        throw new Error("Email/Password incorrect")
    };

    const token = sign({email: user.email}, "cf37ab95c13b0cbe7e8c2f938021277c", {
        subject: user.id,
        expiresIn: "1d"
    });
    return token; 

    };
};
// token com expiração menor
// e refresh foken com expiração maior, sendo que quando expirar esse. será gerado outro com base 
// no token que foi cadastrado no sistema




