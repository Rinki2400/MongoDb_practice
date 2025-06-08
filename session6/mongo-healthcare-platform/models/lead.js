const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  city: String,
  status: String,
  tags: [String],
  score: {
    leadQuality: Number,
    engagement: Number
  },
  interactions: [
    {
      channel: String,
      message: String,
      timestamp: Date,
      agent: String
    }
  ],
  clinicId: mongoose.Schema.Types.ObjectId,
  contactedAt: Date,
  createdAt: Date
});

module.exports = mongoose.model("Lead", leadSchema);
