import dotenv from "dotenv";
dotenv.config();

import router from "./router/router";
import express, { Express } from "express";

if (process.env.PORT) {
  const PORT = parseInt(process.env.PORT, 10) || 3000;

  const app: Express = express();

  app.use(express.json());
  app.use("/api/v1", router);

  app.listen(PORT, () => {
    console.log(`Server is running at port http://127.0.0.1:${PORT}`);
  });
} else {
  throw new Error("Environment PORT is unavailable");
}
