import { Worker, Job } from "bullmq";
import IORedis from "ioredis";
import axios from "axios";

const redis = new IORedis(parseInt("6379", 10), "localhost");
redis.options.maxRetriesPerRequest = null;

function sendJob(job: Job) {
  axios
    .post("http://localhost:3000/api/v1/data", {
      logMessage: job.data.logMessage,
    })
    .then((data) => {
      console.log("Messagem enviada");
    })
    .catch((e) => {
      setInterval(() => {
        console.log("Job Deu erro", job.id);
      }, 5000);
    });
}

const worker = new Worker(
  "Log",
  async (job: Job) => {
    sendJob(job);
  },
  { connection: redis }
);
