// songController.js
const { cloudinary } = require("../config/cloudinary");
const fs = require("fs");

const albumModel = require("../models/album");
// const addAlbum = async (req, res) => {
//   try {
//     const { name, desc, bgColor } = req.body;

//     const imageFile = req.files.image[0];

//     // Upload image file
//     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//       resource_type: "image",
//     });

//     const albumData = {
//       name,
//       desc,
//       bgColor,
//       image: imageUpload.secure_url,
//     };

//     const album = new albumModel(albumData);
//     await album.save();

//     fs.unlinkSync(imageFile.path);

//     res.json({ success: true, message: "Album added successfully" });
//   } catch (error) {
//     console.error(error);

//     // Send error response only if headers haven't been sent yet
//     if (!res.headersSent) {
//       res.status(500).send("Error uploading album");
//     }
//   }
// };
const addAlbum = async (req, res) => {
  try {
    // The file should be in req.file
    const { name, desc, bgColor } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).send("No image file uploaded");
    }

    // Upload image file to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColor,
      image: imageUpload.secure_url,
    };

    const album = new albumModel(albumData);
    await album.save();

    fs.unlink(imageFile.path, (err) => {
      if (err) console.error("Error deleting file:", err);
    });

    res.json({ success: true, message: "Album added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error uploading album",
      error: error.message,
    });
  }
};

const listAlbum = async (req, res) => {
  try {
    const albums = await albumModel.find({});
    res.json({ success: true, albums });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const deleteAlbum = async (req, res) => {
  try {
    // const songId = req.params.id;
    await albumModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Album deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { addAlbum, listAlbum, deleteAlbum };
