import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  name: { type: String, require: True },
  desc: { type: String, require: True },
  abumn: { type: String, require: True },
  duration: { type: String, require: True },
  file: { type: String, require: True },
  image: { type: String, require: True },
});

export default mongoose.model("Song", songSchema);
