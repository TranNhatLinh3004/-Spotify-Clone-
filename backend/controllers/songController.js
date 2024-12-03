// songController.js
const { cloudinary } = require("../config/cloudinary");
const fs = require("fs");
const addSong = async (req, res) => {
  try {
    const { name, desc, album } = req.body;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    // Tải lên tệp âm thanh với `resource_type` là `video`
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });

    // Tải lên tệp hình ảnh
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    console.log(name, desc, album, audioUpload, imageUpload);

    // Xóa tệp tạm sau khi upload thành công
    fs.unlinkSync(audioFile.path);
    fs.unlinkSync(imageFile.path);

    res.status(200).json({ success: true, audioUpload, imageUpload });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading song");
  }
};

const listSong = async () => {};

module.exports = { addSong, listSong };
