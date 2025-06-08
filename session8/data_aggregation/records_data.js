db.records.insertMany([
    {
      name: "Aarav Mehta",
      accessLevel: "public",
      department: "Finance",
      details: {
        salary: 900000,
        bonus: 100000,
        accessLevel: "private"
      }
    },
    {
      name: "Isha Sharma",
      accessLevel: "public",
      department: "IT",
      details: {
        salary: 850000,
        bonus: 95000,
        accessLevel: "public"
      }
    },
    {
      name: "Kabir Verma",
      accessLevel: "private",
      department: "HR",
      details: {
        salary: 700000,
        bonus: 85000,
        accessLevel: "private"
      }
    }
  ])
  