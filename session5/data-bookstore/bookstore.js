const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Adjust if your MongoDB URI is different
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("onlinebookstore");
    const books = db.collection("books");

    await books.insertMany([
      {
        title: "The White Tiger",
        author: "Aravind Adiga",
        genres: ["Fiction", "Satire"],
        tags: ["award-winning", "dark humor", "modern India"],
        publisher: { name: "HarperCollins", location: "India" },
        publication_date: new Date("2008-10-14"),
        price: 499.99,
        available: true,
        ratings: [4.5, 4.0, 4.2],
        reviews: [
          { reviewer: "Rajesh", rating: 4.5, comment: "A gripping read!" },
          { reviewer: "Priya", rating: 4.0, comment: "Well-written and engaging." }
        ]
      },
      {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        genres: ["Magical Realism", "Fiction"],
        tags: ["magical realism", "historical", "India"],
        publisher: { name: "Jonathan Cape", location: "UK" },
        publication_date: new Date("1981-04-15"),
        price: 550.00,
        available: true,
        ratings: [4.7, 4.8, 4.6],
        reviews: [
          { reviewer: "Deepak", rating: 4.7, comment: "An absolute classic." },
          { reviewer: "Meera", rating: 4.8, comment: "Rich and imaginative." }
        ]
      },
      {
        title: "The Palace of Illusions",
        author: "Chitra Banerjee Divakaruni",
        genres: ["Mythology", "Historical Fiction"],
        tags: ["mahabharata", "women's perspective", "Draupadi"],
        publisher: { name: "Picador", location: "USA" },
        publication_date: new Date("2008-02-12"),
        price: 399.99,
        available: true,
        ratings: [4.6, 4.5, 4.4],
        reviews: [
          { reviewer: "Rohan", rating: 4.6, comment: "A fresh take on Mahabharata." },
          { reviewer: "Anjali", rating: 4.5, comment: "Loved Draupadi's perspective." }
        ]
      },
      {
        title: "The Guide",
        author: "R.K. Narayan",
        genres: ["Fiction", "Philosophical"],
        tags: ["classic", "spiritual journey", "Indian literature"],
        publisher: { name: "Indian Thought Publications", location: "India" },
        publication_date: new Date("1958-10-01"),
        price: 299.50,
        available: true,
        ratings: [4.4, 4.2, 4.5],
        reviews: [
          { reviewer: "Suresh", rating: 4.4, comment: "Thought-provoking novel." },
          { reviewer: "Reema", rating: 4.2, comment: "Timeless and engaging." }
        ]
      },
      {
        title: "Interpreter of Maladies",
        author: "Jhumpa Lahiri",
        genres: ["Short Stories", "Fiction"],
        tags: ["immigration", "Bengali culture", "Pulitzer Prize"],
        publisher: { name: "Mariner Books", location: "USA" },
        publication_date: new Date("1999-07-01"),
        price: 350.00,
        available: false,
        ratings: [4.8, 4.9, 4.7],
        reviews: [
          { reviewer: "Tanya", rating: 4.8, comment: "Each story is a gem." },
          { reviewer: "Vivek", rating: 4.9, comment: "Deep and beautifully written." }
        ]
      },
      {
        title: "The Inheritance of Loss",
        author: "Kiran Desai",
        genres: ["Fiction", "Historical"],
        tags: ["booker prize", "India-Nepal", "identity"],
        publisher: { name: "Grove Press", location: "USA" },
        publication_date: new Date("2006-08-01"),
        price: 320.00,
        available: true,
        ratings: [4.5, 4.6, 4.3],
        reviews: [
          { reviewer: "Akash", rating: 4.5, comment: "Profound and poetic." },
          { reviewer: "Nisha", rating: 4.6, comment: "Evocative and deeply moving." }
        ]
      }
    ]);

    console.log("Books inserted successfully.");
  } catch (err) {
    console.error("Error inserting books:", err);
  } finally {
    await client.close();
  }
}

run();
