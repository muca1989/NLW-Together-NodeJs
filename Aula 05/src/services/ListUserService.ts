import { getCustomRepository } from "typeorm";
import { UsersRepository} from "../repositories/UsersRepositories"
import { classToPlain } from "class-transformer"; 
export class ListUserService {
    async execute() {
        const userRepository = getCustomRepository(UsersRepository);

        const users = await userRepository.find()

        return classToPlain(users);
    }; 
}