import mongoose from "mongoose";
import { CONNECTION_STRING_MONGO as connectionString, MILLISECONDS_TO_WAIT_AFTER_RETRY } from "../defaultEnvs";

if (connectionString == null) throw new Error("Enviroment MONGO_URI not defined")

let isConnect = false;

(function connectDatabase() {
  mongoose
    .connect(connectionString)
    .then(() => {
      isConnect = true;
      console.log(`[server]: MongoDB was connected`);
    })
    .catch((error) => {
      console.log(`[Error]: ${error}`);
      console.log(`[Info]: Retry in ${MILLISECONDS_TO_WAIT_AFTER_RETRY} MS`);
      setTimeout(() => {
        connectDatabase();
      }, MILLISECONDS_TO_WAIT_AFTER_RETRY);
    });
})();

mongoose.Promise = global.Promise;

export default mongoose;
