// $ (Positional Operator)
// Find with projection:

db.orders.find(
  { "items.product": "apple" }
);

db.orders.find(
  { "items.product": "apple" },
  {"items.$":1}
);
db.orders.find(
  { "items.product": "apple" },
  { "items.$": 1 }
);

db.orders.findOne(
    { "items.product": "apple" },
    { customer: 1, "items.$": 1 }
  )
db.students.find(
  {"grades.subject":"english"},{"grades.$":1}
)

db.students.find(
  { grades: { $elemMatch: { subject: "math" } } })

  db.students.find(
    { "grades.subject": "math"   })

db.students.find(
  { grades: { $elemMatch: { subject: "math",score: { $gte: 90 } } } },
  { name: 1, grades: { $elemMatch: { subject: "math", score: { $gte: 90 } } } }
);

db.students.find(
  { grades: { $elemMatch: { subject: "math",score: { $gte: 90 } } } },
  { name: 1, grades: 1} 
);

db.posts.find(
  {},
  { title: 1, comments: { $slice: 3 } }
)


db.posts.find(
  {},
  { title: 1, comments: { $slice: -3 } }
)

// Note: $[identifier] only works in update statements, not find().


db.orders.updateOne(
  { "items.product": "apple" },
  { $set: { "items.$.qty": 99 } }
)

db.orders.updateMany(
  { "items.product": "apple" },
  { $set: { "items.$.qty": 95 } }
)

// $[] (All Elements Update)
// Update all elements of the array:

db.orders.updateOne(
  { _id: 1 },
  { $set: { "items.$[].qty": 100 } }
)

// $[<identifier>] with arrayFilters (Filtered Array Elements Update)
// Update only elements that match a filter:

db.orders.updateOne(
  { _id: 1 },
  { $inc: { "items.$[elem].qty": 10 } },
  {
    arrayFilters: [ { "elem.product": "banana" } ]
  }
)

// Note: $[] is not supported in find() or findOne() – only in updates


db.orders.updateOne(
  { "items.product": "apple" },
  { $addToSet: {items:{ product: "apple", qty: 20 }} }
)


db.students.updateOne(
  { name: "Hamidur", "grades.subject": "math" },
  { $set: { "grades.$.score": 100 } }
);