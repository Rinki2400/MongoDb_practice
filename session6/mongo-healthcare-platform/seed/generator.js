const { faker } = require("@faker-js/faker");

const INDIAN_CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow"
];

function randomIndianPhone() {
  return "+91 " + faker.phone.number("9#########");
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomLongitudeIndia() {
  // India longitude roughly: 68 to 97
  return parseFloat((68 + Math.random() * (97 - 68)).toFixed(6));
}

function randomLatitudeIndia() {
  // India latitude roughly: 6 to 35
  return parseFloat((6 + Math.random() * (35 - 6)).toFixed(6));
}

module.exports = {
  INDIAN_CITIES,

  // generateClinics(cities, perCity) {
  //   return cities.flatMap(city =>
  //     Array.from({ length: perCity }).map(() => ({
  //       name: `${faker.company.name()} Clinic`,
  //       city,
  //       address: faker.location.streetAddress()
  //     }))
  //   );
  // },
  // generateClinics(cities, perCity) {
  //   return cities.flatMap(city =>
  //     Array.from({ length: perCity }).map(() => ({
  //       name: `${faker.company.name()} Clinic`,
  //       city,
  //       address: faker.location.streetAddress(),
  //       location: {
  //         type: "Point",
  //         coordinates: [
  //           parseFloat(faker.location.longitude()),  // longitude first
  //           parseFloat(faker.location.latitude())    // latitude second
  //         ]
  //       }
  //     }))
  //   );
  // },
  
  generateClinics(cities, perCity) {
    return cities.flatMap(city =>
      Array.from({ length: perCity }).map(() => {
        const longitude = randomLongitudeIndia();
        const latitude = randomLatitudeIndia();
  
        return {
          name: `${faker.company.name()} Clinic`,
          city,
          address: faker.location.streetAddress(),
          location_2d: [longitude, latitude],  // 2d index
          location_2dsphere: {
            type: "Point",
            coordinates: [longitude, latitude] // 2dsphere index
          }
        };
      })
    );
  },
  
  

  generateUsers(clinics, count) {
    return Array.from({ length: count }).map(() => {
      const clinic = pick(clinics);
      return {
        name: faker.person.fullName(),
        role: pick(["front_desk", "ops_manager"]),
        clinicId: clinic._id
      };
    });
  },

  // generateLeads(clinics, count) {
  //   return Array.from({ length: count }).map(() => {
  //     const clinic = pick(clinics);
  //     const createdAt = faker.date.past({ years: 1 });
  //     return {
  //       name: faker.person.fullName(),
  //       phone: randomIndianPhone(),
  //       city: clinic.city,
  //       clinicId: clinic._id,
  //       status: pick(["lead", "contacted", "booked", "attended"]),
  //       tags: faker.helpers.arrayElements(["orthopedic", "high_intent", "new", "follow_up", "low_quality"], 2),
  //       score: {
  //         leadQuality: faker.number.int({ min: 50, max: 100 }),
  //         engagement: faker.number.int({ min: 40, max: 100 })
  //       },
  //       interactions: [
  //         {
  //           channel: pick(["SMS", "Call", "WhatsApp"]),
  //           message: faker.lorem.sentence(),
  //           timestamp: faker.date.recent({ days: 10 }),
  //           agent: pick(["IntakeBot", "Front Desk", "Follow-up Bot"])
  //         }
  //       ],
  //       createdAt,
  //       contactedAt: faker.datatype.boolean() ? faker.date.between({ from: createdAt, to: new Date() }) : null
  //     };
  //   });
  // },

  // generateLeads(clinics, count) {
  //   return Array.from({ length: count }).map(() => {
  //     const clinic = pick(clinics);
  //     const createdAt = faker.date.past({ years: 1 });
  
  //     // Generate multiple interactions per lead (1-3 interactions)
  //     const numInteractions = faker.number.int({ min: 1, max: 3 });
  //     const interactions = Array.from({ length: numInteractions }).map(() => ({
  //       channel: pick(["SMS", "Call", "WhatsApp"]),
  //       message: faker.lorem.sentence(),
  //       timestamp: faker.date.recent({ days: 10 }),
  //       agent: pick(["IntakeBot", "Front Desk", "Follow-up Bot"])
  //     }));
  
  //     return {
  //       name: faker.person.fullName(),
  //       phone: randomIndianPhone(),
  //       city: clinic.city,
  //       clinicId: clinic._id,
  //       status: pick(["lead", "contacted", "booked", "attended"]),
  //       tags: faker.helpers.arrayElements(["orthopedic", "high_intent", "new", "follow_up", "low_quality"], 2),
  //       score: {
  //         leadQuality: faker.number.int({ min: 50, max: 100 }),
  //         engagement: faker.number.int({ min: 40, max: 100 })
  //       },
  //       interactions,  // <-- multiple interactions here
  //       createdAt,
  //       contactedAt: faker.datatype.boolean() ? faker.date.between({ from: createdAt, to: new Date() }) : null
  //     };
  //   });
  // }, 
  
  generateLeads(clinics, count) {
    return Array.from({ length: count }).map(() => {
      const clinic = pick(clinics);
      const createdAt = faker.date.past({ years: 1 });
      return {
        name: faker.person.fullName(),
        phone: randomIndianPhone(),
        city: clinic.city,
        clinicId: clinic._id,
        status: pick(["lead", "contacted", "booked", "attended"]),
        tags: faker.helpers.arrayElements(["orthopedic", "high_intent", "new", "follow_up", "low_quality"], 2),
        score: {
          leadQuality: faker.number.int({ min: 50, max: 100 }),
          engagement: faker.number.int({ min: 40, max: 100 })
        },
        interactions: Array.from({ length: faker.number.int({ min: 2, max: 4 }) }).map(() => ({
          channel: pick(["SMS", "Call", "WhatsApp"]),
          message: faker.lorem.sentence(),
          timestamp: faker.date.recent({ days: 10 }),
          agent: pick(["IntakeBot", "Front Desk", "Follow-up Bot", "Senior Nurse", "Doctor Review"])
        })),
        createdAt,
        contactedAt: faker.datatype.boolean() ? faker.date.between({ from: createdAt, to: new Date() }) : null
      };
    });
  },  
  generateAppointments(leads, users, count) {
    const bookedLeads = leads.filter(l => ["booked", "attended"].includes(l.status));
    return Array.from({ length: count }).map(() => {
      const lead = pick(bookedLeads);
      const user = pick(users);
      return {
        leadId: lead._id,
        clinicId: lead.clinicId,
        userId: user._id,
        status: pick(["scheduled", "completed", "cancelled"]),
        date: faker.date.future(),
        followUp: faker.datatype.boolean()
      };
    });
  }
};
