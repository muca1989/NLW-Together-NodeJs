import { getCustomRepository} from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService{
  async execute({ name, email, admin}: IUserRequest){
    const usersRepository = getCustomRepository(UserRepositories);

    if(!email)
    {
      throw new Error ("Email is invalid..."+" Plz Check Email");
    }

    const userAlreadyExists = await usersRepository.findOne({ email});

    if(userAlreadyExists){
      throw new Error("User already Exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    });
    await usersRepository.save(user);

  }

};

export {CreateUserService};