import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiveComplimentsService";

export class ListUserReceiverComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const lisUserReceiverComplimentsService = new ListUserReceiverComplimentsService();

        const compliments = await lisUserReceiverComplimentsService.execute(user_id);
        
        return response.json(compliments);
    };
};