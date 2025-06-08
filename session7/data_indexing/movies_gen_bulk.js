const { MongoClient } = require('mongodb');
const random = require('lodash/random');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function insertMovies() {
    try {
        await client.connect();
        const db = client.db("bookmyshow");
        const collection = db.collection("movies");

        const movies = [
            { name: "Jawan", genre: "Action", movie_language: "Hindi", year: 2023, imdb: 7.8 },
            { name: "Pathaan", genre: "Action", movie_language: "Hindi", year: 2023, imdb: 7.5 },
            { name: "RRR", genre: "Action", movie_language: "Telugu", year: 2022, imdb: 8.7 },
            { name: "KGF Chapter 2", genre: "Action", movie_language: "Kannada", year: 2022, imdb: 8.4 },
            { name: "Kantara", genre: "Thriller", movie_language: "Kannada", year: 2022, imdb: 8.3 },
            { name: "Pushpa: The Rise", genre: "Action", movie_language: "Telugu", year: 2021, imdb: 7.6 },
            { name: "Drishyam 2", genre: "Thriller", movie_language: "Hindi", year: 2022, imdb: 8.2 },
            { name: "Vikram", genre: "Action", movie_language: "Tamil", year: 2022, imdb: 8.4 },
            { name: "3 Idiots", genre: "Comedy", movie_language: "Hindi", year: 2009, imdb: 8.4 },
            { name: "Dangal", genre: "Drama", movie_language: "Hindi", year: 2016, imdb: 8.3 },
            { name: "Jawan 1", genre: "Action", movie_language: "Hindi", year: 2023, imdb: 7.7 },
            { name: "Pathaan 1", genre: "Action", movie_language: "Hindi", year: 2023, imdb: 7.6 },
            { name: "RRR 1", genre: "Action", movie_language: "Telugu", year: 2022, imdb: 8.8 },
            { name: "KGF Chapter 3", genre: "Action", movie_language: "Kannada", year: 2023, imdb: 8.5 },
            { name: "Kantara 2", genre: "Thriller", movie_language: "Kannada", year: 2023, imdb: 8.4 },
            { name: "Pushpa: The Rise 2", genre: "Action", movie_language: "Telugu", year: 2023, imdb: 7.7 },
            { name: "Drishyam 3", genre: "Thriller", movie_language: "Hindi", year: 2023, imdb: 8.3 },
            { name: "Vikram 2", genre: "Action", movie_language: "Tamil", year: 2023, imdb: 8.5 },
            { name: "3 Idiots 2", genre: "Comedy", movie_language: "Hindi", year: 2012, imdb: 8.5 },
            { name: "Dangal 2", genre: "Drama", movie_language: "Hindi", year: 2021, imdb: 8.4 },
            { name: "Bajrangi Bhaijaan", genre: "Drama", movie_language: "Hindi", year: 2015, imdb: 8.0 },
            { name: "Sultan", genre: "Drama", movie_language: "Hindi", year: 2016, imdb: 7.9 },
            { name: "War", genre: "Action", movie_language: "Hindi", year: 2019, imdb: 6.9 },
            { name: "Raees", genre: "Crime", movie_language: "Hindi", year: 2017, imdb: 7.8 },
            { name: "Tanhaji: The Unsung Warrior", genre: "Action", movie_language: "Hindi", year: 2020, imdb: 7.6 },
            { name: "Baahubali 2: The Conclusion", genre: "Action", movie_language: "Telugu", year: 2017, imdb: 8.2 },
            { name: "Chhichhore", genre: "Comedy", movie_language: "Hindi", year: 2019, imdb: 7.7 }
        ];

        // Create realistic movie names (sequels or variations)
        const sequelMovies = [
            "Jawan", "Pathaan", "RRR", "KGF", "Kantara", "Pushpa", "Drishyam", "Vikram", "3 Idiots", "Dangal",
            "Bajrangi Bhaijaan", "Sultan", "War", "Raees", "Tanhaji", "Baahubali", "Chhichhore"
        ];

        // Adding more movies with realistic names
        for (let i = 101; i <= 120; i++) {
            const movieName = sequelMovies[random(0, sequelMovies.length - 1)] + " " + (random(1, 5)); // Adding a number like 1, 2, 3, etc. to names
            movies.push({
                name: movieName,
                genre: ["Action", "Comedy", "Thriller", "Drama", "Romance", "Sci-Fi"][random(0, 5)],
                movie_language: ["Hindi", "Tamil", "Telugu", "Kannada", "Malayalam"][random(0, 4)],
                year: random(2000, 2024),
                imdb: parseFloat((random(5.0, 9.0, true)).toFixed(1))
            });
        }

        await collection.insertMany(movies);
        console.log("✅ 120 Indian movies inserted into MongoDB!");
    } catch (error) {
        console.error("Error inserting movies:", error);
    } finally {
        await client.close();
    }
}

insertMovies();
