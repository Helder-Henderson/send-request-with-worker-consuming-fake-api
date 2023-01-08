export const data = "/data"

import { Router } from "express";
import { storeLog as insertLog } from "../controllers/storeLog";
import { processQueue } from "../controllers/processQueue";

// WORKER SEND TO THIS ENDPOINT

const router = Router();
router
    .post(data, insertLog)
    .get(data, processQueue);

export default router;
