import { CreateComplimentService } from "../services/CreateComplimentService";
import { Request, Response } from "express";

export class CreateComplimentController {
    async handle(request: Request, response: Response) {
        const {  user_receiver, tag_id, message } = request.body;
        const { user_id } = request; // não entendi esta parte.
        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            user_sender: user_id,
            user_receiver,
            tag_id,
            message
        })
        return response.json(compliment)
    }
}