// songController.js
const { cloudinary } = require("../config/cloudinary");
const fs = require("fs");
const { default: song } = require("../models/song");
const songModel = require("../models/song");
const addSong = async (req, res) => {
  try {
    const { name, desc, album } = req.body;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    // Upload audio file with `resource_type` set to `video`
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });

    // Upload image file
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    // Calculate duration
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;

    // Create song data object
    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url, // Fix here: use `imageUpload.secure_url` for image
      file: audioUpload.secure_url, // Fix here: use `audioUpload.secure_url` for audio
      duration,
    };

    // Save song to the database
    const song = new songModel(songData);
    await song.save();

    // Delete temporary files
    fs.unlinkSync(audioFile.path);
    fs.unlinkSync(imageFile.path);

    // Send a single response
    res.status(200).json({
      success: true,
      message: "Song added successfully",
      song,
      audioUpload,
      imageUpload,
    });

    // No further responses after this point
  } catch (error) {
    console.error(error);

    // Send error response only if headers haven't been sent yet
    if (!res.headersSent) {
      res.status(500).send("Error uploading song");
    }
  }
};

const listSong = async (req, res) => {
  try {
    const songs = await songModel.find();
    res.json({ success: true, songs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const deleteSong = async (req, res) => {
  try {
    // const songId = req.params.id;
    await songModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Song deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { addSong, listSong, deleteSong };
