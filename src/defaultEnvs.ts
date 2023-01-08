export const BASE_API = "/api/v1"
export const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

export const CONNECTION_STRING_MONGO: string | null = process.env.MONGO_URI || null;
export const PORT_REDIS: number = process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379
export const HOST_REDIS: string = process.env.REDIS_HOST || "127.0.0.1"
export const MILLISECONDS_TO_WAIT_AFTER_RETRY: number = 10000;
