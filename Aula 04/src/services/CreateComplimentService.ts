import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepositories";
import { UsersRepository } from "../repositories/UsersRepositories";

interface IComplimentRequest { 
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}
export class CreateComplimentService {
    async execute({user_sender, user_receiver, tag_id, message}: IComplimentRequest) {
        const complimentsRepository = getCustomRepository(ComplimentsRepository);
        const usersRepository = getCustomRepository(UsersRepository);

        if(user_sender === user_receiver) {
            throw new Error("Incorrect User ") // estou com um pequena duvida aqui!!
        }

        const userReceiverExists = await usersRepository.findOne(user_sender);

        if(!userReceiverExists) {
            throw new Error("User revceiver does not exists")
        }

        const compliment = complimentsRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })
        await complimentsRepository.save(compliment)
        return compliment  
    }
}