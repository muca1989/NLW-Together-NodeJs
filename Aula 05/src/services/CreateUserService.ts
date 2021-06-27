import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";
interface IUserRequest {
    name: string;
    email: string;
    admin: boolean;
    password: string;
}

export class CreateUserService {
    async execute({name, email, admin = false, password}: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepository)

            if(!email) {
                throw new Error("Email incorreto");
            };
    
            const alreadyExists = await usersRepository.findOne({
                email,
            });
    
            if(alreadyExists) {
                throw new Error("Email já existe, está vindo do controller");
            };

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        });

        await usersRepository.save(user);
        return user;
    };
}