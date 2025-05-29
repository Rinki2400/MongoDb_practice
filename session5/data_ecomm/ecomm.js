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


db.orders.insertMany([
    {
        user_email: "divya.reddy@outlook.com",
        order_date: new Date("2024-05-20"),
        items: [
            { product_name: "Mi Band 6", quantity: 1, price: 2499 },
            { product_name: "Boat Earbuds 141", quantity: 2, price: 1299 }
        ],
        delivery_address: { label: "Home", city: "Hyderabad", pincode: "500033" },
        status: "Pending"
    },
    {
        user_email: "ramesh.kumar@gmail.com",
        order_date: new Date("2024-05-22"),
        items: [
            { product_name: "Surf Excel", quantity: 3, price: 150 },
            { product_name: "Colgate Toothpaste", quantity: 1, price: 50 }
        ],
        delivery_address: { label: "Home", city: "Bangalore", pincode: "560001" },
        status: "Delivered"
    }
])

