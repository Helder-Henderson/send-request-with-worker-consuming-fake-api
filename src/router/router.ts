import { Router } from "express";
import logRouter from "./__routes__/logRouter";
import dataRouter from "./__routes__/dataRouter";

const router = Router();

router.use("/log", logRouter);
router.use("/data", dataRouter);

export default router;
