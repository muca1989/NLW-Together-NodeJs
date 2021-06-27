import {Request, Response} from "express";
import {CreateUserService} from "../services/CreateUserService";
class CreateUserController{

  async hundle(req: Request, res: Response)
  {
    const {name, email, admin} = req.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({name, email, admin});

    return res.json(user);
  }

}

export { CreateUserController };