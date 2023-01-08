import Redis, { Redis as IRedis } from "ioredis";
import { PORT_REDIS as port, HOST_REDIS as host, MILLISECONDS_TO_WAIT_AFTER_RETRY } from "../defaultEnvs";

let redis!: IRedis;
let isConnect = false;

(function connectDatabase() {
  try {
    redis = new Redis({
      port,
      host,
      maxRetriesPerRequest: null,
    });
    isConnect = true
  }
  catch (error) {
    console.log(`[Error]: ${error}`);
    console.log(`[Info]: Retry in ${MILLISECONDS_TO_WAIT_AFTER_RETRY} MS`);
    setTimeout(() => {
      connectDatabase();
    }, MILLISECONDS_TO_WAIT_AFTER_RETRY);
  }
})();

export default redis;
