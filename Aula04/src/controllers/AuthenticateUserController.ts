import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {

    async handle(request: Request, response: Response) {
        const authentionUseService = new AuthenticateUserService()

        const { email, password } = request.body;
        const token = await authentionUseService.execute({ 
            password,
            email
        })
        return response.json(token);
    }
};