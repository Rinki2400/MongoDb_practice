const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
  name: String,
  city: String,
  address: String,
  location_2d: [Number], // 2d index support
  location_2dsphere: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] }
  }
});

module.exports = mongoose.model("Clinic", clinicSchema);
