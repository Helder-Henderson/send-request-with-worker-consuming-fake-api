import { Request, Response } from "express";
import lineReader from "line-reader";
import { Queue } from "bullmq";
import redis from "../../database/redis";

export async function getLogs(request: Request, response: Response) {
  const queue = new Queue("Log", { connection: redis });
  lineReader.eachLine("src/static/access_split.txt", async (line, last) => {
    await queue.add("log", { logMessage: line }, { removeOnComplete: true });
  });

  return response.json();
}
