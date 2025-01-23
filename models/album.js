const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  name: { type: String, require: true },
  desc: { type: String, require: true },
  bgColor: {
    type: String,
    default: "#ffffff",
  },
  // file: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Album", albumSchema);
