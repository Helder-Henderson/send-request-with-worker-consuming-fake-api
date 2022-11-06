import { Router } from "express";
import { storeLog } from "../../controllers/storeLog/storeLog";

const storeLogRouter = Router();

storeLogRouter.post("", storeLog).get("", (req, res) => {
  return res.sendStatus(200);
});

export default storeLogRouter;
