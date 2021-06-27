import { NextFunction, Request, Response} from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepositories";

async function ensureAdmin( request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;

    const usersRepository = getCustomRepository(UsersRepository);

    const { admin } = await usersRepository.findOne(user_id)

    if(admin) {    
       return next();
    }

    return response.status(401).json(
        {status: "error", 
        message: "Acess only adminstrators"
    });
};

export { ensureAdmin }