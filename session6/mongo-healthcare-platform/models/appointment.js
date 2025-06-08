const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  leadId: mongoose.Schema.Types.ObjectId,
  clinicId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  status: String,
  date: Date,
  followUp: Boolean
});

module.exports = mongoose.model("Appointment", appointmentSchema);
