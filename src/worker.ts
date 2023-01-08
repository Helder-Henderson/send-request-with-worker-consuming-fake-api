import { Worker, Job } from "bullmq";
import { BASE_API as baseApi, PORT as appPort } from "./defaultEnvs";
import axios from "axios";
import redis from "./database/redis";

const POST_PATH = `http://127.0.0.1:${appPort}${baseApi}/data`
let count = 0

function sendJob(job: Job) {
  axios
    .post(POST_PATH, {
      logMessage: job.data.logMessage,
    })
    .then(() => {
      ++count
      if (count > 290) console.log(`Mensagens enviadas ${count}`);
      else {
        if (count % 50 == 1) console.log(`Mensagens enviadas ${count}`)
      }
    })
    .catch((error) => {
      setInterval(() => {
        console.error(`Job ${job.id}`, error);
      }, 5000);
    });
}

new Worker(
  "Log",
  async (job: Job) => {
    sendJob(job);
  },
  { connection: redis }
);