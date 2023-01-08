import dotenv from "dotenv";
dotenv.config();

import { PORT as port, BASE_API as baseApi } from "./defaultEnvs";

import router from "./router";
import express, { Express } from "express";

const app: Express = express();

app.use(express.json());
app.use(baseApi, router);

app.listen(port, () => {
  console.info(`[INFO]: Server is running at port http://127.0.0.1:${port}`);
  console.info(`[INFO]: Server is running at port http://127.0.0.1:${port}${baseApi}`);
  console.info(`[INFO]: Base API ${baseApi}`);
});
