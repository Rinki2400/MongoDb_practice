const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  clinicId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("User", userSchema);
