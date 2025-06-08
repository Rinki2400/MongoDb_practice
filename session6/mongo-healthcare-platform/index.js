const mongoose = require("mongoose");
const connectDB = require("./db");
const { NUM_CITIES, CLINICS_PER_CITY, NUM_LEADS, NUM_APPOINTMENTS, NUM_USERS } = require("./config");
const {
  INDIAN_CITIES,
  generateClinics,
  generateUsers,
  generateLeads,
  generateAppointments
} = require("./seed/generator");

const Clinic = require("./models/clinic");
const User = require("./models/user");
const Lead = require("./models/lead");
const Appointment = require("./models/appointment");

(async () => {
  await connectDB();
  await mongoose.connection.dropDatabase();
  console.log("🔥 Dropped old DB");

  const cities = INDIAN_CITIES.slice(0, NUM_CITIES);
  const rawClinics = generateClinics(cities, CLINICS_PER_CITY);
  const clinics = await Clinic.insertMany(rawClinics);
  console.log(`🏥 Inserted ${clinics.length} clinics`);

  const rawUsers = generateUsers(clinics, NUM_USERS);
  const users = await User.insertMany(rawUsers);
  console.log(`👥 Inserted ${users.length} users`);

  const rawLeads = generateLeads(clinics, NUM_LEADS);
  const leads = await Lead.insertMany(rawLeads);
  console.log(`📞 Inserted ${leads.length} leads`);

  const rawAppointments = generateAppointments(leads, users, NUM_APPOINTMENTS);
  await require("./models/appointment").insertMany(rawAppointments);
  console.log(`📆 Inserted ${rawAppointments.length} appointments`);

  process.exit();
})();
