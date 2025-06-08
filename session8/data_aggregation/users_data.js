db.users.insertMany([
    {
        name: "Divya Reddy",
        email: "divya.reddy@outlook.com",
        mobile: "+91-9012345678",
        addresses: [
            { label: "Home", city: "Hyderabad", pincode: "500033", state: "Telangana" },
            { label: "Work", city: "Hyderabad", pincode: "500081", state: "Telangana" }
        ]
    },
    {
        name: "Ramesh Kumar",
        email: "ramesh.kumar@gmail.com",
        mobile: "+91-9123456789",
        addresses: [
            { label: "Home", city: "Bangalore", pincode: "560001", state: "Karnataka" },
            { label: "Office", city: "Bangalore", pincode: "560102", state: "Karnataka" }
        ]
    }
])