require("dotenv").config();

module.exports = {
  NUM_CITIES: parseInt(process.env.NUM_CITIES || 5),
  CLINICS_PER_CITY: parseInt(process.env.CLINICS_PER_CITY || 5),
  NUM_LEADS: parseInt(process.env.NUM_LEADS || 100),
  NUM_APPOINTMENTS: parseInt(process.env.NUM_APPOINTMENTS || 50),
  NUM_USERS: parseInt(process.env.NUM_USERS || 20)
};
