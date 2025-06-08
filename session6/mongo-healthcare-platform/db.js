const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/healthcare_ad_platform");
  console.log("✅ MongoDB connected");
}

module.exports = connectDB;
