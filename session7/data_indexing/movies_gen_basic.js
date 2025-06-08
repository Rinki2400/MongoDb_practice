const { MongoClient } = require("mongodb");
const random = require("lodash/random");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function insertMovies() {
  try {
    await client.connect();
    const db = client.db("bookmyshow");
    const collection = db.collection("movies");

    // Sample Movie Data
    const movies = [
      { name: "Jawan", genre: "Action", movie_language: "Hindi", year: 2023, imdb: 7.8, description: "Action thriller" },
      { name: "Pathaan", genre: "Action", movie_language: "Hindi", year: 2023, imdb: 7.5, description: "Spy thriller" },
      { name: "RRR", genre: "Action", movie_language: "Telugu", year: 2022, imdb: 8.7, description: "Epic drama" }
    ];

    const genres = ["Action", "Comedy", "Thriller", "Drama", "Sci-Fi", "Romance"];
    const movie_languages = ["Hindi", "Tamil", "Telugu", "Kannada", "Malayalam"];

    for (let i = 4; i <= 100; i++) {
      movies.push({
        name: `Movie ${i}`,
        genre: genres[random(0, genres.length - 1)],
        movie_language: movie_languages[random(0, movie_languages.length - 1)],
        year: random(2000, 2024),
        imdb: parseFloat((random(5.0, 9.0, true)).toFixed(1)),
        description: `A great ${genres[random(0, genres.length - 1)]} movie`
      });
    }

    await collection.insertMany(movies);
    console.log("✅ 100 Indian movies inserted into MongoDB!");

    // await collection.createIndex(
    //   { name: "text", description: "text" }, 
    //   { default_language: "english" }
    // );
    // console.log("🔍 Text index created successfully!");

  } catch (error) {
    console.error("❌ Error inserting movies:", error);
  } finally {
    await client.close();
  }
}

insertMovies();
