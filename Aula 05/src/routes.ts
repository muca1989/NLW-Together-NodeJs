import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listUserReceiverComplimentsController =  new ListUserReceiverComplimentsController();
const listUserSendComplimentsController =  new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.use(ensureAdmin);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliment", ensureAuthenticated, createComplimentController.handle);

router.get(
"/compliments/send", 
ensureAuthenticated, 
listUserSendComplimentsController.handle);

router.get(
"/compliments/receive", 
ensureAuthenticated,    
listUserReceiverComplimentsController.handle);

router.get(
"/tags",
ensureAuthenticated,
listTagsController.handle);

router.get(
"/all_tags_users", 
ensureAuthenticated, 
listUsersController.handle);

export { router };











