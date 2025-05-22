// Assessment 1: Indian College Student Records
// Collection: college_students
// Each document has the following properties:
// name, age, gender, department, roll_no, semester, city


//  Tasks
//1. Insert 3 students with full details across different departments and cities.
//2. Find all students in the "Computer Science" department and in semester 4.
//3. Update the city of the student with roll_no: "CS2023001" to "Mumbai".
//4.  Delete the student whose roll_no is "EC2023002".

// Solution

// switch database
use college_student_records;

// Task 1
db.college_students.insertMany([
    {
        name: "Aarav Mehta", age: 20, gender: "Male", department: "Computer Science",
        roll_no: "CS2023001", semester: 4, city: "Ahmedabad"
    },
    {
        name: "Sneha Kapoor", age: 21, gender: "Female", department: "Electronics",
        roll_no: "EC2023002", semester: 4, city: "Delhi"
    },
    {
        name: "Ravi Singh", age: 22, gender: "Male", department: "Mechanical",
        roll_no: "ME2023003", semester: 5, city: "Pune"
    }
])

// Verify insertion
db.college_students.find({});

// Task 2
db.college_students.find({ department: "Computer Science", semester: 4 })

// Task 3
db.college_students.updateOne(
    { roll_no: "CS2023001" },
    { $set: { city: "Mumbai" } }
)

// Verify update
db.college_students.find({roll_no: "CS2023001"});

// Task 4
db.college_students.deleteOne({ roll_no: "EC2023002" })

// Verify deletion
db.college_students.find({roll_no: "EC2023002"});


// Assessment 2: Indian Railway Booking System
// Collection: train_bookings
// Each document has the following properties:
// name, age, gender, train_no, source, destination, status, coach

// Tasks
// 1. Insert 3 bookings with full details across different trains and routes.
// 2. Find all bookings in train number "12345" with status "confirmed".
// 3. Update the status of the booking for "Rohan Kumar" to "confirmed".
// 4. Delete the booking for "Neha Yadav".

// Solution

// switch database
use indian_railway_bookings;

// Task 1: Insert bookings
db.train_bookings.insertMany([
  {
    name: "Priya Sharma", age: 28, gender: "Female", train_no: "12345",
    source: "Lucknow", destination: "Delhi", status: "confirmed", coach: "B1"
  },
  {
    name: "Rohan Kumar", age: 30, gender: "Male", train_no: "12345",
    source: "Patna", destination: "Delhi", status: "waiting", coach: "WL"
  },
  {
    name: "Neha Yadav", age: 25, gender: "Female", train_no: "54321",
    source: "Chennai", destination: "Bangalore", status: "confirmed", coach: "S2"
  }
]);

// Verify insertion
db.train_bookings.find({});

// Task 2: Read confirmed bookings for train_no "12345"
db.train_bookings.find({ train_no: "12345", status: "confirmed" });

// Task 3: Update status for Rohan Kumar
db.train_bookings.updateOne(
  { name: "Rohan Kumar" },
  { $set: { status: "confirmed" } }
);

// Verify update
db.train_bookings.find({ name: "Rohan Kumar" });

// Task 4: Delete booking for Neha Yadav
db.train_bookings.deleteOne({ name: "Neha Yadav" });

// Verify deletion
db.train_bookings.find({ name: "Neha Yadav" });



// Assessment 3: Indian E-commerce Orders
// Collection: ecom_orders
// Each document includes:
// order_id, customer_name, city, items (array), total_amount, payment_mode, status

// Tasks
// 1. Insert 3 orders with different customers, items, cities, and payment modes (UPI, COD, etc.).
// 2. Find all orders where total_amount is more than ₹10,000.
// 3. Update the status of the order with order_id: "ORD1002" to "delivered".
// 4. Delete the order of the customer "Kiran Bhat".

// Solution

// switch database
use indian_ecom_orders;

// Task 1: Insert orders
db.ecom_orders.insertMany([
  {
    order_id: "ORD1001", customer_name: "Ravi Kumar", city: "Bangalore",
    items: ["mobile", "case"], total_amount: 12000, payment_mode: "UPI", status: "shipped"
  },
  {
    order_id: "ORD1002", customer_name: "Anjali Gupta", city: "Kolkata",
    items: ["laptop"], total_amount: 48000, payment_mode: "Credit Card", status: "processing"
  },
  {
    order_id: "ORD1003", customer_name: "Kiran Bhat", city: "Chennai",
    items: ["headphones", "speaker"], total_amount: 9000, payment_mode: "COD", status: "cancelled"
  }
]);

// Verify insertion
db.ecom_orders.find({});

// Task 2: Find orders with total_amount > ₹10,000
db.ecom_orders.find({ total_amount: { $gt: 10000 } });

// Task 3: Update order status for order_id "ORD1002"
db.ecom_orders.updateOne(
  { order_id: "ORD1002" },
  { $set: { status: "delivered" } }
);

// Verify update
db.ecom_orders.find({ order_id: "ORD1002" });

// Task 4: Delete order of customer "Kiran Bhat"
db.ecom_orders.deleteOne({ customer_name: "Kiran Bhat" });

// Verify deletion
db.ecom_orders.find({ customer_name: "Kiran Bhat" });


// Assessment 4: Voter Registration via Aadhar
// Collection: voter_registry
// Each document includes:
// aadhar_no, name, age, gender, state, district, voter_id, is_verified

// Tasks
// 1. Insert 3 voter records from different states with all fields filled.
// 2. Find all verified voters (is_verified: true) from "Maharashtra" who are over age 25.
// 3. Update the age of "Amit Desai" to 26.
// 4. Delete the voter whose aadhar_no is "2345-6789-123".

// Solution

// switch database
use national_voter_registry;

// Task 1: Insert voter records
db.voter_registry.insertMany([
  {
    aadhar_no: "1234-5678-9123", name: "Meena Joshi", age: 28,
    gender: "Female", state: "Maharashtra", district: "Pune",
    voter_id: "MH2890123", is_verified: true
  },
  {
    aadhar_no: "2345-6789-123", name: "Ritu Kapoor", age: 30,
    gender: "Female", state: "Delhi", district: "North Delhi",
    voter_id: "DL2309123", is_verified: false
  },
  {
    aadhar_no: "3456-7891-2345", name: "Amit Desai", age: 24,
    gender: "Male", state: "Gujarat", district: "Surat",
    voter_id: "GJ2011345", is_verified: true
  }
]);

// Verify insertion
db.voter_registry.find({});

// Task 2: Find verified voters from Maharashtra over age 25
db.voter_registry.find({
  state: "Maharashtra",
  is_verified: true,
  age: { $gt: 25 }
});

// Task 3: Update age of Amit Desai to 26
db.voter_registry.updateOne(
  { name: "Amit Desai" },
  { $set: { age: 26 } }
);

// Verify update
db.voter_registry.find({ name: "Amit Desai" });

// Task 4: Delete voter with incomplete aadhar_no
db.voter_registry.deleteOne({ aadhar_no: "2345-6789-123" });

// Verify deletion
db.voter_registry.find({ aadhar_no: "2345-6789-123" });
