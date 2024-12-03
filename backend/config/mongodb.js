// dbConfig.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // URL kết nối đến MongoDB (Thay bằng URL của bạn)
    const mongoURI = process.env.MONGODB_URL;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Thoát chương trình nếu kết nối thất bại
  }
};

module.exports = connectDB;
