import { Router } from "express";
import { getLogs } from "../../controllers/log/logControllers";

const logRouter = Router();

logRouter.get("", getLogs);

export default logRouter;
