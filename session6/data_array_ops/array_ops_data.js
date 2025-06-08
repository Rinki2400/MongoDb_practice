db.orders.insertMany([
    {
        _id: 1,
        customer: "Rajesh",
        items: [
            { product: "apple", qty: 10 },
            { product: "banana", qty: 5 },
            { product: "apple", qty: 3 }
        ]
    },
    {
        _id: 2,
        customer: "Suresh",
        items: [
            { product: "orange", qty: 7 },
            { product: "banana", qty: 2 }
        ]
    }
])
db.orders.insertOne({
    _id: 102,
    customer: "Ranjani",
    items: [
        { product: "apple", qty: 10 },
        { product: "banana", qty: 5 }
    ]
})


db.students.insertMany([
    {
        name: "Arjun",
        grades: [
            { subject: "math", score: 92 },
            { subject: "english", score: 85 }
        ]
    },
    {
        name: "Bhavya",
        grades: [
            { subject: "math", score: 75 },
            { subject: "english", score: 80 }
        ]
    }
])

db.posts.insertOne({
    title: "My Blog Post",
    comments: ["Great!", "Nice read.", "Loved it!", "Awesome!"]
})

db.users.insertOne({
    _id: 101,
    name: "Harish",
    email: "harish@example.com",
    password: "secret123"
})



db.students.insertMany([
    {
        name: "Tushar",
        grades: [
            { subject: "science", score: 99 },
            { subject: "hindi", score: 100 }
        ]
    },
    {
        name: "Hamidur",
        grades: [
            { subject: "computers", score: 100 },
            { subject: "science", score: 100 },
            { subject: "math", score: 100 }
        ]
    }
])