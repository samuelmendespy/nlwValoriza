import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);

router.use(ensureAdmin);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router }