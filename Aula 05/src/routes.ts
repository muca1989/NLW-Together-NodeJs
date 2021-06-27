import {Router} from 'express';
import {CreateUserController} from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin} from "./middlewares/ensureAdmin";
import { AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();


const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.use(ensureAdmin);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post('/users', createUserController.hundle);
router.post("/login", authenticateUserController.handle);
router.post("/compliment", createComplimentController.handle);

export {router};