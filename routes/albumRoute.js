var express = require("express");
var router = express.Router();

const {
    addAlbum,
    listAlbum,
    deleteAlbum,
} = require("../controllers/albumController");
const { upload } = require("../middlewares/multer");

// router.post("/add", upload.single("image"), addAlbum);
router.post("/add", upload.single("image"), addAlbum);

router.get("/list", listAlbum);

router.post("/remove", deleteAlbum);

module.exports = router;