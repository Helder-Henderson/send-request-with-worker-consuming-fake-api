import { Request, Response } from "express";
import LogModel from "../../database/model/log";
import { Log } from "../../entities/Log";

export async function storeLog(request: Request, response: Response) {
  const logMessage = request.body.logMessage;

  const log = new Log(logMessage);

  LogModel.collection.insertOne(log);

  return response.sendStatus(200);
}
