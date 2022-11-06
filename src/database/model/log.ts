import mongoose from "../mongoose";

const LogSchema = new mongoose.Schema({
  log: {
    type: String,
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

const LogModel = mongoose.model("Log", LogSchema);

export default LogModel;
