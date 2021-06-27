import {Req, Resp} from "express";
import {CreateUserService} from "../services/CreateUserService";
class CreateUserController{

  async hundle(request: Req, response: Resp)
  {
    const {name, email, admin} = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({name, email, admin});

    return response.json(user);
  }

}

export { CreateUserController };