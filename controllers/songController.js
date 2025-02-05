// songController.js
const { cloudinary } = require("../config/cloudinary");
const fs = require("fs");
const { default: song } = require("../models/song");
const songModel = require("../models/song");
const { log } = require("console");
const addSong = async(req, res) => {
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

const listSong = async(req, res) => {
    try {
        const songs = await songModel.find();
        res.json({ success: true, songs });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const deleteSong = async(req, res) => {
    try {
        // const songId = req.params.id;
        await songModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Song deleted successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
const getSongDetail = async(req, res) => {
    try {
        const song = await songModel.findById(req.params.id);
        console.log(song);

        if (!song) {
            return res
                .status(404)
                .json({ success: false, message: "Bài hát không tồn tại" });
        }

        res.json({ success: true, song });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateSong = async(req, res) => {
    try {
        const { id } = req.body;
        const { name, desc, album } = req.body;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        // Tìm bài hát cần cập nhật
        const song = await songModel.findById("nhi", id);

        if (!song) {
            return res
                .status(404)
                .json({ success: false, message: "Bài hát không tồn tại" });
        }

        let audioUrl = song.file;

        console.log(audioUrl);

        // if (audioFile) {
        //     const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
        //         resource_type: "video",
        //     });
        //     audioUrl = audioUpload.secure_url;

        //     // Xóa file audio cũ trên Cloudinary (nếu có)
        //     const oldAudioPublicId = song.file.split("/").pop().split(".")[0];
        //     await cloudinary.uploader.destroy(oldAudioPublicId, {
        //         resource_type: "video",
        //     });

        //     // Xóa file tạm
        //     fs.unlinkSync(audioFile.path);
        // }

        // // Cập nhật file image nếu có
        // let imageUrl = song.image;
        // if (imageFile) {
        //     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        //         resource_type: "image",
        //     });
        //     imageUrl = imageUpload.secure_url;

        //     // Xóa file image cũ trên Cloudinary (nếu có)
        //     const oldImagePublicId = song.image.split("/").pop().split(".")[0];
        //     await cloudinary.uploader.destroy(oldImagePublicId, {
        //         resource_type: "image",
        //     });

        //     // Xóa file tạm
        //     fs.unlinkSync(imageFile.path);
        // }

        // // Tính lại thời gian nếu có file audio mới
        // const duration = audioFile ?
        //     `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
        //   audioUpload.duration % 60
        // )}` :
        //     song.duration;

        // // Cập nhật dữ liệu bài hát
        // const updatedSong = await songModel.findByIdAndUpdate(
        //     id, { name, desc, album, image: imageUrl, file: audioUrl, duration }, { new: true }
        // );

        // res.json({
        //     success: true,
        //     message: "Cập nhật bài hát thành công",
        //     song: updatedSong,
        // });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "Lỗi khi cập nhật bài hát" });
    }
};
module.exports = { addSong, listSong, deleteSong, getSongDetail, updateSong };