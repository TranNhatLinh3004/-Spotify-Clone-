var express = require("express");
var router = express.Router();

const { addSong, listSong } = require("../controllers/songController");
const { upload } = require("../middlewares/multer");

router.post(
  "/add",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "audio",
      maxCount: 1,
    },
  ]),
  addSong
);
router.get("/list", listSong);

module.exports = router; // Use module.exports for CommonJS
