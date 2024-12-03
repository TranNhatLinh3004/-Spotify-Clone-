import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  name: { type: String, require: True },
  desc: { type: String, require: True },
  bgColor: {
    type: String,
    default: "#ffffff",
  },

  image: { type: String, require: True },
});

export default mongoose.model("Album", albumSchema);
