import mongoose from "mongoose";

const connectionString: string = process.env.MONGO_URI
  ? process.env.MONGO_URI
  : "";

let isConnect = false;

const millisecondsToWait = 10000;

(function connectDatabase() {
  mongoose
    .connect(connectionString)
    .then(() => {
      isConnect = true;
      console.log(`[server]: MongoDB was connected`);
    })
    .catch((error) => {
      console.log(`[Error]: ${error}`);
      console.log(`[Info]: Retry in ${millisecondsToWait} MS`);
      setTimeout(() => {
        connectDatabase();
      }, millisecondsToWait);
    });
})();

mongoose.Promise = global.Promise;

export default mongoose;
