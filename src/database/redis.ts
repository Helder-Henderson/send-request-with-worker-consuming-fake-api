import IORedis, { Redis } from "ioredis";

let redis: Redis;

if (process.env.DB_PORT && process.env.DB_HOST) {
  redis = new IORedis(parseInt(process.env.DB_PORT, 10), process.env.DB_HOST);

  redis.options.maxRetriesPerRequest = null;
} else {
  throw new Error("environment DB_HOST OR DB_PORT unavailable");
}

export default redis;
