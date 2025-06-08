db.movies.insertMany([
    {
        title: "Gully Boy",
        releaseYear: 2019,
        genres: ["Drama", "Music"],
        cast: [
            { name: "Ranveer Singh", role: "Murad" },
            { name: "Alia Bhatt", role: "Safina" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2019-02-14T00:00:00Z"),
        language: "Hindi",
        director: { name: "Zoya Akhtar", experience: 12 },
        boxOffice: { domestic: 100, international: 40 }
    },
    {
        title: "Chhichhore",
        releaseYear: 2019,
        genres: ["Comedy", "Drama"],
        cast: [
            { name: "Sushant Singh Rajput", role: "Anirudh" },
            { name: "Shraddha Kapoor", role: "Sumati" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2019-09-06T00:00:00Z"),
        language: "Hindi",
        director: { name: "Nitesh Tiwari", experience: 15 },
        boxOffice: { domestic: 150, international: 50 }
    },
    {
        title: "Dangal",
        releaseYear: 2016,
        genres: ["Drama", "Sport"],
        cast: [
            { name: "Aamir Khan", role: "Mahavir Singh Phogat" },
            { name: "Fatima Sana Shaikh", role: "Geeta Phogat" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2016-12-23T00:00:00Z"),
        language: "Hindi",
        director: { name: "Nitesh Tiwari", experience: 15 },
        boxOffice: { domestic: 500, international: 150 }
    },
    {
        title: "PK",
        releaseYear: 2014,
        genres: ["Comedy", "Drama", "Sci-Fi"],
        cast: [
            { name: "Aamir Khan", role: "PK" },
            { name: "Anushka Sharma", role: "Jagat Janani" }
        ],
        rating: 8.1,
        releaseDate: new ISODate("2014-12-19T00:00:00Z"),
        language: "Hindi",
        director: { name: "Rajkumar Hirani", experience: 20 },
        boxOffice: { domestic: 350, international: 100 }
    },
    {
        title: "Zindagi Na Milegi Dobara",
        releaseYear: 2011,
        genres: ["Drama", "Adventure"],
        cast: [
            { name: "Hrithik Roshan", role: "Arjun" },
            { name: "Farhan Akhtar", role: "Imran" }
        ],
        rating: 8.1,
        releaseDate: new ISODate("2011-07-15T00:00:00Z"),
        language: "Hindi",
        director: { name: "Zoya Akhtar", experience: 12 },
        boxOffice: { domestic: 150, international: 50 }
    },
    {
        title: "Bajirao Mastani",
        releaseYear: 2015,
        genres: ["Drama", "Romance"],
        cast: [
            { name: "Ranveer Singh", role: "Bajirao" },
            { name: "Deepika Padukone", role: "Mastani" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2015-12-18T00:00:00Z"),
        language: "Hindi",
        director: { name: "Sanjay Leela Bhansali", experience: 30 },
        boxOffice: { domestic: 250, international: 80 }
    },
    {
        title: "Queen",
        releaseYear: 2013,
        genres: ["Drama", "Comedy"],
        cast: [
            { name: "Kangana Ranaut", role: "Rani Mehra" },
            { name: "Rajkummar Rao", role: "Vijay" }
        ],
        rating: 8.2,
        releaseDate: new ISODate("2013-03-07T00:00:00Z"),
        language: "Hindi",
        director: { name: "Vikas Bahl", experience: 10 },
        boxOffice: { domestic: 70, international: 20 }
    },
    {
        title: "Andhadhun",
        releaseYear: 2018,
        genres: ["Thriller", "Crime"],
        cast: [
            { name: "Ayushmann Khurrana", role: "Aakash" },
            { name: "Tabu", role: "Simi" }
        ],
        rating: 8.2,
        releaseDate: new ISODate("2018-10-05T00:00:00Z"),
        language: "Hindi",
        director: { name: "Sriram Raghavan", experience: 15 },
        boxOffice: { domestic: 75, international: 30 }
    },
    {
        title: "Tanu Weds Manu",
        releaseYear: 2011,
        genres: ["Comedy", "Romance"],
        cast: [
            { name: "Kangana Ranaut", role: "Tanu" },
            { name: "R. Madhavan", role: "Manu" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2011-02-25T00:00:00Z"),
        language: "Hindi",
        director: { name: "Anand L. Rai", experience: 12 },
        boxOffice: { domestic: 50, international: 20 }
    },
    {
        title: "Kabhi Khushi Kabhie Gham",
        releaseYear: 2001,
        genres: ["Drama", "Family"],
        cast: [
            { name: "Shah Rukh Khan", role: "Rahul" },
            { name: "Kajol", role: "Anjali" }
        ],
        rating: 7.4,
        releaseDate: new ISODate("2001-12-14T00:00:00Z"),
        language: "Hindi",
        director: { name: "Karan Johar", experience: 25 },
        boxOffice: { domestic: 150, international: 80 }
    },
    {
        title: "Dilwale Dulhania Le Jayenge",
        releaseYear: 1995,
        genres: ["Romance", "Drama"],
        cast: [
            { name: "Shah Rukh Khan", role: "Raj" },
            { name: "Kajol", role: "Simran" }
        ],
        rating: 8.2,
        releaseDate: new ISODate("1995-10-20T00:00:00Z"),
        language: "Hindi",
        director: { name: "Aditya Chopra", experience: 30 },
        boxOffice: { domestic: 250, international: 150 }
    },
    {
        title: "Lagaan",
        releaseYear: 2001,
        genres: ["Drama", "Sport"],
        cast: [
            { name: "Aamir Khan", role: "Bhuvan" },
            { name: "Gracy Singh", role: "Gauri" }
        ],
        rating: 8.1,
        releaseDate: new ISODate("2001-06-15T00:00:00Z"),
        language: "Hindi",
        director: { name: "Ashutosh Gowariker", experience: 15 },
        boxOffice: { domestic: 150, international: 100 }
    },
    {
        title: "3 Idiots",
        releaseYear: 2009,
        genres: ["Comedy", "Drama"],
        cast: [
            { name: "Aamir Khan", role: "Rancho" },
            { name: "R. Madhavan", role: "Farhan" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2009-12-25T00:00:00Z"),
        language: "Hindi",
        director: { name: "Rajkumar Hirani", experience: 20 },
        boxOffice: { domestic: 200, international: 100 }
    },
    {
        title: "Taare Zameen Par",
        releaseYear: 2007,
        genres: ["Drama", "Family"],
        cast: [
            { name: "Aamir Khan", role: "Ram Shankar Nikumbh" },
            { name: "Darsheel Safary", role: "Ishaan Awasthi" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2007-12-21T00:00:00Z"),
        language: "Hindi",
        director: { name: "Aamir Khan", experience: 20 },
        boxOffice: { domestic: 100, international: 50 }
    },
    {
        title: "Jab We Met",
        releaseYear: 2007,
        genres: ["Romance", "Comedy"],
        cast: [
            { name: "Shahid Kapoor", role: "Aditya" },
            { name: "Kareena Kapoor", role: "Geet" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2007-10-26T00:00:00Z"),
        language: "Hindi",
        director: { name: "Imtiaz Ali", experience: 10 },
        boxOffice: { domestic: 80, international: 30 }
    },
    {
        title: "Barfi!",
        releaseYear: 2012,
        genres: ["Drama", "Romance"],
        cast: [
            { name: "Ranbir Kapoor", role: "Barfi" },
            { name: "Priyanka Chopra", role: "Jhilmil" }
        ],
        rating: 8.1,
        releaseDate: new ISODate("2012-09-14T00:00:00Z"),
        language: "Hindi",
        director: { name: "Anurag Basu", experience: 15 },
        boxOffice: { domestic: 80, international: 40 }
    },
    {
        title: "Piku",
        releaseYear: 2015,
        genres: ["Comedy", "Drama"],
        cast: [
            { name: "Amitabh Bachchan", role: "Bhashkor Banerjee" },
            { name: "Deepika Padukone", role: "Piku Banerjee" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2015-05-08T00:00:00Z"),
        language: "Hindi",
        director: { name: "Shoojit Sircar", experience: 15 },
        boxOffice: { domestic: 100, international: 50 }
    },
    {
        title: "Wake Up Sid",
        releaseYear: 2009,
        genres: ["Drama", "Coming-of-age"],
        cast: [
            { name: "Ranbir Kapoor", role: "Sid" },
            { name: "Konkona Sen Sharma", role: "Aisha" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2009-10-02T00:00:00Z"),
        language: "Hindi",
        director: { name: "Ayan Mukerji", experience: 10 },
        boxOffice: { domestic: 40, international: 20 }
    }
]);

db.movies.insertMany([
    {
        title: "KGF Chapter 1",
        releaseYear: 2018,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Yash", role: "Rocky" },
            { name: "Srinidhi Shetty", role: "Reena" }
        ],
        rating: 8.3,
        releaseDate: new ISODate("2018-12-21T00:00:00Z"),
        language: "Kannada",
        director: { name: "Prashanth Neel", experience: 10 },
        boxOffice: { domestic: 250, international: 100 }
    },
    {
        title: "KGF Chapter 2",
        releaseYear: 2022,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Yash", role: "Rocky" },
            { name: "Sanjay Dutt", role: "Adheera" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2022-04-14T00:00:00Z"),
        language: "Kannada",
        director: { name: "Prashanth Neel", experience: 10 },
        boxOffice: { domestic: 400, international: 200 }
    },
    {
        title: "Lucia",
        releaseYear: 2013,
        genres: ["Psychological", "Thriller"],
        cast: [
            { name: "Naveen Shankar", role: "Nikhil" },
            { name: "Sangeetha Sringeri", role: "Dr. Deepa" }
        ],
        rating: 8.2,
        releaseDate: new ISODate("2013-03-15T00:00:00Z"),
        language: "Kannada",
        director: { name: "Pawan Kumar", experience: 8 },
        boxOffice: { domestic: 50, international: 20 }
    },
    {
        title: "RangiTaranga",
        releaseYear: 2015,
        genres: ["Thriller", "Mystery"],
        cast: [
            { name: "Nirup Bhandari", role: "Siddhartha" },
            { name: "Radhika Chetan", role: "Gayathri" }
        ],
        rating: 7.8,
        releaseDate: new ISODate("2015-07-03T00:00:00Z"),
        language: "Kannada",
        director: { name: "Anup Bhandari", experience: 7 },
        boxOffice: { domestic: 40, international: 10 }
    },
    {
        title: "Ugramm",
        releaseYear: 2014,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Sriimurali", role: "Shankar" },
            { name: "Haripriya", role: "Ganga" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2014-02-21T00:00:00Z"),
        language: "Kannada",
        director: { name: "Prashanth Neel", experience: 10 },
        boxOffice: { domestic: 80, international: 30 }
    },
    {
        title: "Super 30",
        releaseYear: 2019,
        genres: ["Drama", "Biography"],
        cast: [
            { name: "Hrithik Roshan", role: "Anand Kumar" },
            { name: "Mrunal Thakur", role: "Rashmi" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2019-07-12T00:00:00Z"),
        language: "Hindi",
        director: { name: "Vikas Bahl", experience: 12 },
        boxOffice: { domestic: 150, international: 50 }
    },
    {
        title: "Kirik Party",
        releaseYear: 2016,
        genres: ["Comedy", "Drama"],
        cast: [
            { name: "Rakshit Shetty", role: "Karna" },
            { name: "Samyuktha Hegde", role: "Madhuri" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2016-12-30T00:00:00Z"),
        language: "Kannada",
        director: { name: "Rishab Shetty", experience: 6 },
        boxOffice: { domestic: 70, international: 20 }
    },
    {
        title: "Bhoothnath",
        releaseYear: 2008,
        genres: ["Comedy", "Fantasy"],
        cast: [
            { name: "Amitabh Bachchan", role: "Bhoothnath" },
            { name: "Shah Rukh Khan", role: "Himself" }
        ],
        rating: 7.0,
        releaseDate: new ISODate("2008-05-09T00:00:00Z"),
        language: "Hindi",
        director: { name: "Vishal Pandya", experience: 10 },
        boxOffice: { domestic: 100, international: 30 }
    },
    {
        title: "Godhi Banna Sadharana Mykattu",
        releaseYear: 2016,
        genres: ["Drama", "Family"],
        cast: [
            { name: "Anant Nag", role: "Raghuraman" },
            { name: "Radhika Chetan", role: "Dr. Deepa" }
        ],
        rating: 7.8,
        releaseDate: new ISODate("2016-03-25T00:00:00Z"),
        language: "Kannada",
        director: { name: "Hemanth Rao", experience: 5 },
        boxOffice: { domestic: 30, international: 10 }
    },
    {
        title: "Vikrant Rona",
        releaseYear: 2022,
        genres: ["Action", "Fantasy", "Thriller"],
        cast: [
            { name: "Kichcha Sudeep", role: "Vikrant Rona" },
            { name: "Nirup Bhandari", role: "Shiva" }
        ],
        rating: 7.5,
        releaseDate: new ISODate("2022-07-28T00:00:00Z"),
        language: "Kannada",
        director: { name: "Anup Bhandari", experience: 7 },
        boxOffice: { domestic: 200, international: 80 }
    },
    {
        title: "Shivarjuna",
        releaseYear: 2016,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Sriimurali", role: "Shivarjuna" },
            { name: "Haripriya", role: "Ravi" }
        ],
        rating: 7.2,
        releaseDate: new ISODate("2016-09-09T00:00:00Z"),
        language: "Kannada",
        director: { name: "M. S. Ramesh", experience: 12 },
        boxOffice: { domestic: 40, international: 15 }
    },
    {
        title: "Naatu Naatu",
        releaseYear: 2023,
        genres: ["Dance", "Music"],
        cast: [
            { name: "Ram Charan", role: "Ramaraju" },
            { name: "NTR Jr.", role: "Bheem" }
        ],
        rating: 7.8,
        releaseDate: new ISODate("2023-01-07T00:00:00Z"),
        language: "Kannada",
        director: { name: "S. S. Rajamouli", experience: 15 },
        boxOffice: { domestic: 300, international: 150 }
    },
    {
        title: "Kiss",
        releaseYear: 2016,
        genres: ["Romance", "Drama"],
        cast: [
            { name: "Dilraj", role: "Siddharth" },
            { name: "Radhika Pandit", role: "Nandini" }
        ],
        rating: 6.7,
        releaseDate: new ISODate("2016-11-23T00:00:00Z"),
        language: "Kannada",
        director: { name: "M.S. Ramesh", experience: 10 },
        boxOffice: { domestic: 25, international: 5 }
    },
    {
        title: "Thithi",
        releaseYear: 2015,
        genres: ["Comedy", "Drama"],
        cast: [
            { name: "Chandrashekar C", role: "Srikant" },
            { name: "Raghavendra", role: "Thimma" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2015-05-01T00:00:00Z"),
        language: "Kannada",
        director: { name: "Raam Reddy", experience: 6 },
        boxOffice: { domestic: 20, international: 5 }
    },
    {
        title: "Jolly Days",
        releaseYear: 2009,
        genres: ["Comedy", "Family"],
        cast: [
            { name: "Ravichandran", role: "Ravi" },
            { name: "Shruthi", role: "Aarti" }
        ],
        rating: 7.0,
        releaseDate: new ISODate("2009-02-20T00:00:00Z"),
        language: "Kannada",
        director: { name: "Mahesh Babu", experience: 5 },
        boxOffice: { domestic: 30, international: 10 }
    },
    {
        title: "Betty",
        releaseYear: 2019,
        genres: ["Thriller", "Action"],
        cast: [
            { name: "Puneeth Rajkumar", role: "Raghav" },
            { name: "Radhika Pandit", role: "Gargi" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2019-09-01T00:00:00Z"),
        language: "Kannada",
        director: { name: "Siddharth", experience: 5 },
        boxOffice: { domestic: 60, international: 20 }
    }
]);

db.movies.insertMany([
    {
        title: "Vikram",
        releaseYear: 2022,
        genres: ["Action", "Thriller"],
        cast: [
            { name: "Kamal Haasan", role: "Vikram" },
            { name: "Fahadh Faasil", role: "Vikram's enemy" },
            { name: "Vijay Sethupathi", role: "The villain" }
        ],
        rating: 8.7,
        releaseDate: new ISODate("2022-06-03T00:00:00Z"),
        language: "Tamil",
        director: { name: "Lokesh Kanagaraj", experience: 6 },
        boxOffice: { domestic: 350, international: 120 }
    },
    {
        title: "Master",
        releaseYear: 2021,
        genres: ["Action", "Thriller"],
        cast: [
            { name: "Vijay", role: "JD" },
            { name: "Vijay Sethupathi", role: "Bhavani" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2021-01-13T00:00:00Z"),
        language: "Tamil",
        director: { name: "Lokesh Kanagaraj", experience: 6 },
        boxOffice: { domestic: 250, international: 80 }
    },
    {
        title: "Kaithi",
        releaseYear: 2019,
        genres: ["Action", "Thriller"],
        cast: [
            { name: "Karthi", role: "Dilli" },
            { name: "Narain", role: "Sathyaraj" }
        ],
        rating: 8.3,
        releaseDate: new ISODate("2019-10-25T00:00:00Z"),
        language: "Tamil",
        director: { name: "Lokesh Kanagaraj", experience: 6 },
        boxOffice: { domestic: 150, international: 50 }
    },
    {
        title: "Mersal",
        releaseYear: 2017,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Vijay", role: "Vijay" },
            { name: "Samantha Ruth Prabhu", role: "Tara" }
        ],
        rating: 7.5,
        releaseDate: new ISODate("2017-10-18T00:00:00Z"),
        language: "Tamil",
        director: { name: "Atlee", experience: 7 },
        boxOffice: { domestic: 250, international: 100 }
    },
    {
        title: "Soorarai Pottru",
        releaseYear: 2020,
        genres: ["Drama", "Biography"],
        cast: [
            { name: "Suriya", role: "Nedumaaran Rajangam" },
            { name: "Aparna Balamurali", role: "Bommi" }
        ],
        rating: 8.8,
        releaseDate: new ISODate("2020-10-30T00:00:00Z"),
        language: "Tamil",
        director: { name: "Sudha Kongara", experience: 12 },
        boxOffice: { domestic: 150, international: 60 }
    },
    {
        title: "Vada Chennai",
        releaseYear: 2018,
        genres: ["Action", "Crime"],
        cast: [
            { name: "Dhanush", role: "Anbu" },
            { name: "Ameer", role: "Rajamani" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2018-10-17T00:00:00Z"),
        language: "Tamil",
        director: { name: "Vetrimaaran", experience: 12 },
        boxOffice: { domestic: 120, international: 40 }
    },
    {
        title: "Enthiran",
        releaseYear: 2010,
        genres: ["Science Fiction", "Action"],
        cast: [
            { name: "Rajinikanth", role: "Dr. Vaseegaran/Chitti" },
            { name: "Aishwarya Rai", role: "Sana" }
        ],
        rating: 7.1,
        releaseDate: new ISODate("2010-10-01T00:00:00Z"),
        language: "Tamil",
        director: { name: "Shankar", experience: 30 },
        boxOffice: { domestic: 350, international: 120 }
    },
    {
        title: "Aruvi",
        releaseYear: 2016,
        genres: ["Drama", "Social"],
        cast: [
            { name: "Aditi Balan", role: "Aruvi" },
            { name: "Pradeep Antony", role: "Arun" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2016-12-23T00:00:00Z"),
        language: "Tamil",
        director: { name: "Ashwiny Iyer Tiwari", experience: 8 },
        boxOffice: { domestic: 40, international: 10 }
    },
    {
        title: "96",
        releaseYear: 2018,
        genres: ["Romance", "Drama"],
        cast: [
            { name: "Trisha", role: "Janaki" },
            { name: "Vijay Sethupathi", role: "Ram" }
        ],
        rating: 8.8,
        releaseDate: new ISODate("2018-10-04T00:00:00Z"),
        language: "Tamil",
        director: { name: "C. Premkumar", experience: 7 },
        boxOffice: { domestic: 80, international: 40 }
    },
    {
        title: "Kaaka Muttai",
        releaseYear: 2015,
        genres: ["Drama", "Comedy"],
        cast: [
            { name: "Vignesh", role: "Kutta" },
            { name: "Ramesh", role: "Ramesh" }
        ],
        rating: 8.1,
        releaseDate: new ISODate("2015-06-05T00:00:00Z"),
        language: "Tamil",
        director: { name: "Manikandan", experience: 5 },
        boxOffice: { domestic: 40, international: 10 }
    },
    {
        title: "Jigarthanda",
        releaseYear: 2014,
        genres: ["Action", "Comedy"],
        cast: [
            { name: "Siddharth", role: "Karthik" },
            { name: "Bobby Simha", role: "Assault Sethu" }
        ],
        rating: 8.3,
        releaseDate: new ISODate("2014-08-01T00:00:00Z"),
        language: "Tamil",
        director: { name: "Karthik Subbaraj", experience: 7 },
        boxOffice: { domestic: 60, international: 25 }
    },
    {
        title: "Ratsasan",
        releaseYear: 2018,
        genres: ["Thriller", "Crime"],
        cast: [
            { name: "Vishnu Vishal", role: "Raghavan" },
            { name: "Amala Paul", role: "Maya" }
        ],
        rating: 8.6,
        releaseDate: new ISODate("2018-10-05T00:00:00Z"),
        language: "Tamil",
        director: { name: "Ram Kumar", experience: 6 },
        boxOffice: { domestic: 100, international: 30 }
    },
    {
        title: "Maanagaram",
        releaseYear: 2017,
        genres: ["Thriller", "Drama"],
        cast: [
            { name: "Sundeep Kishan", role: "Arun" },
            { name: "Sri", role: "Krish" }
        ],
        rating: 7.7,
        releaseDate: new ISODate("2017-03-10T00:00:00Z"),
        language: "Tamil",
        director: { name: "Lokesh Kanagaraj", experience: 5 },
        boxOffice: { domestic: 50, international: 10 }
    },
    {
        title: "Theri",
        releaseYear: 2016,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Vijay", role: "Joseph Kuruvilla" },
            { name: "Samantha Ruth Prabhu", role: "Maya" }
        ],
        rating: 7.2,
        releaseDate: new ISODate("2016-04-14T00:00:00Z"),
        language: "Tamil",
        director: { name: "Atlee", experience: 6 },
        boxOffice: { domestic: 200, international: 70 }
    },
    {
        title: "Sethu",
        releaseYear: 1999,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Vikram", role: "Sethu" },
            { name: "Abhinaya", role: "Valli" }
        ],
        rating: 7.7,
        releaseDate: new ISODate("1999-06-25T00:00:00Z"),
        language: "Tamil",
        director: { name: "Arun Vaidyanathan", experience: 10 },
        boxOffice: { domestic: 50, international: 15 }
    },
    {
        title: "Naanum Rowdy Dhaan",
        releaseYear: 2015,
        genres: ["Action", "Comedy"],
        cast: [
            { name: "Vijay Sethupathi", role: "Randy" },
            { name: "Nayanthara", role: "Kadhambini" }
        ],
        rating: 7.5,
        releaseDate: new ISODate("2015-10-21T00:00:00Z"),
        language: "Tamil",
        director: { name: "Vignesh Shivan", experience: 6 },
        boxOffice: { domestic: 75, international: 30 }
    },
    {
        title: "Kabali",
        releaseYear: 2016,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Rajinikanth", role: "Kabali" },
            { name: "Radhika Apte", role: "Radhika" }
        ],
        rating: 6.5,
        releaseDate: new ISODate("2016-07-22T00:00:00Z"),
        language: "Tamil",
        director: { name: "Pa. Ranjith", experience: 7 },
        boxOffice: { domestic: 300, international: 100 }
    }
]);

db.movies.insertMany([
    {
        title: "RRR",
        releaseYear: 2022,
        genres: ["Action", "Drama"],
        cast: [
            { name: "N. T. Rama Rao Jr.", role: "Komaram Bheem" },
            { name: "Ram Charan", role: "Alluri Sitarama Raju" },
            { name: "Alia Bhatt", role: "Sita" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2022-03-25T00:00:00Z"),
        language: "Telugu",
        director: { name: "S. S. Rajamouli", experience: 15 },
        boxOffice: { domestic: 1200, international: 500 }
    },
    {
        title: "Baahubali: The Beginning",
        releaseYear: 2015,
        genres: ["Action", "Adventure"],
        cast: [
            { name: "Prabhas", role: "Baahubali" },
            { name: "Anushka Shetty", role: "Devasena" },
            { name: "Rana Daggubati", role: "Bhallaladeva" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2015-07-10T00:00:00Z"),
        language: "Telugu",
        director: { name: "S. S. Rajamouli", experience: 15 },
        boxOffice: { domestic: 650, international: 250 }
    },
    {
        title: "Baahubali: The Conclusion",
        releaseYear: 2017,
        genres: ["Action", "Adventure"],
        cast: [
            { name: "Prabhas", role: "Baahubali" },
            { name: "Anushka Shetty", role: "Devasena" },
            { name: "Rana Daggubati", role: "Bhallaladeva" }
        ],
        rating: 8.2,
        releaseDate: new ISODate("2017-04-28T00:00:00Z"),
        language: "Telugu",
        director: { name: "S. S. Rajamouli", experience: 15 },
        boxOffice: { domestic: 1800, international: 700 }
    },
    {
        title: "Khaidi",
        releaseYear: 2019,
        genres: ["Action", "Thriller"],
        cast: [
            { name: "Karthi", role: "Kaithi" },
            { name: "Narain", role: "Sathyaraj" }
        ],
        rating: 8.2,
        releaseDate: new ISODate("2019-10-25T00:00:00Z"),
        language: "Telugu",
        director: { name: "Lokesh Kanagaraj", experience: 6 },
        boxOffice: { domestic: 80, international: 40 }
    },
    {
        title: "Ala Vaikunthapurramuloo",
        releaseYear: 2020,
        genres: ["Action", "Comedy"],
        cast: [
            { name: "Allu Arjun", role: "Bantu" },
            { name: "Pooja Hegde", role: "Varsha" }
        ],
        rating: 7.7,
        releaseDate: new ISODate("2020-01-12T00:00:00Z"),
        language: "Telugu",
        director: { name: "Trivikram Srinivas", experience: 20 },
        boxOffice: { domestic: 150, international: 75 }
    },
    {
        title: "Pushpa: The Rise",
        releaseYear: 2021,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Allu Arjun", role: "Pushpa Raj" },
            { name: "Rashmika Mandanna", role: "Srivalli" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2021-12-17T00:00:00Z"),
        language: "Telugu",
        director: { name: "Sukumar", experience: 15 },
        boxOffice: { domestic: 400, international: 200 }
    },
    {
        title: "Srimanthudu",
        releaseYear: 2015,
        genres: ["Drama", "Family"],
        cast: [
            { name: "Mahesh Babu", role: "Harsha" },
            { name: "Shruti Haasan", role: "Charulatha" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2015-08-07T00:00:00Z"),
        language: "Telugu",
        director: { name: "Koratala Siva", experience: 10 },
        boxOffice: { domestic: 200, international: 80 }
    },
    {
        title: "Eega",
        releaseYear: 2012,
        genres: ["Fantasy", "Drama"],
        cast: [
            { name: "Nani", role: "Nani" },
            { name: "Samantha Ruth Prabhu", role: "Bindu" }
        ],
        rating: 7.8,
        releaseDate: new ISODate("2012-07-06T00:00:00Z"),
        language: "Telugu",
        director: { name: "S. S. Rajamouli", experience: 15 },
        boxOffice: { domestic: 130, international: 50 }
    },
    {
        title: "Jersey",
        releaseYear: 2019,
        genres: ["Drama", "Sports"],
        cast: [
            { name: "Nani", role: "Arjun" },
            { name: "Shraddha Srinath", role: "Sarah" }
        ],
        rating: 8.1,
        releaseDate: new ISODate("2019-04-19T00:00:00Z"),
        language: "Telugu",
        director: { name: "Gowtham Tinnanuri", experience: 7 },
        boxOffice: { domestic: 50, international: 20 }
    },
    {
        title: "F2: Fun and Frustration",
        releaseYear: 2019,
        genres: ["Comedy", "Drama"],
        cast: [
            { name: "Venkatesh", role: "Venky" },
            { name: "Varun Tej", role: "Varun" }
        ],
        rating: 7.4,
        releaseDate: new ISODate("2019-01-12T00:00:00Z"),
        language: "Telugu",
        director: { name: "Anil Ravipudi", experience: 10 },
        boxOffice: { domestic: 150, international: 40 }
    },
    {
        title: "Rangasthalam",
        releaseYear: 2018,
        genres: ["Drama", "Thriller"],
        cast: [
            { name: "Ram Charan", role: "Chitti Babu" },
            { name: "Samantha Ruth Prabhu", role: "Rama Lakshmi" }
        ],
        rating: 8.2,
        releaseDate: new ISODate("2018-03-30T00:00:00Z"),
        language: "Telugu",
        director: { name: "Sukumar", experience: 15 },
        boxOffice: { domestic: 250, international: 100 }
    },
    {
        title: "Sye Raa Narasimha Reddy",
        releaseYear: 2019,
        genres: ["Action", "History"],
        cast: [
            { name: "Chiranjeevi", role: "Narasimha Reddy" },
            { name: "Nayanthara", role: "Sye Raa's wife" }
        ],
        rating: 7.5,
        releaseDate: new ISODate("2019-10-02T00:00:00Z"),
        language: "Telugu",
        director: { name: "Surender Reddy", experience: 15 },
        boxOffice: { domestic: 100, international: 30 }
    },
    {
        title: "Raju Gari Gadhi",
        releaseYear: 2015,
        genres: ["Horror", "Comedy"],
        cast: [
            { name: "Aadhi", role: "Raju" },
            { name: "Samantha", role: "Samantha" }
        ],
        rating: 7.0,
        releaseDate: new ISODate("2015-10-01T00:00:00Z"),
        language: "Telugu",
        director: { name: "Omkar", experience: 10 },
        boxOffice: { domestic: 50, international: 20 }
    },
    {
        title: "Shatamanam Bhavati",
        releaseYear: 2017,
        genres: ["Family", "Drama"],
        cast: [
            { name: "Sharwanand", role: "Raghava" },
            { name: "Anupama Parameswaran", role: "Sreeja" }
        ],
        rating: 7.8,
        releaseDate: new ISODate("2017-01-14T00:00:00Z"),
        language: "Telugu",
        director: { name: "Satish Vegesna", experience: 5 },
        boxOffice: { domestic: 50, international: 20 }
    },
    {
        title: "Mahanati",
        releaseYear: 2018,
        genres: ["Biography", "Drama"],
        cast: [
            { name: "Keerthy Suresh", role: "Savithri" },
            { name: "Dulquer Salmaan", role: "Gemini Ganesan" }
        ],
        rating: 8.5,
        releaseDate: new ISODate("2018-05-09T00:00:00Z"),
        language: "Telugu",
        director: { name: "Nag Ashwin", experience: 8 },
        boxOffice: { domestic: 80, international: 40 }
    },
    {
        title: "Vakeel Saab",
        releaseYear: 2021,
        genres: ["Drama", "Courtroom"],
        cast: [
            { name: "Pawan Kalyan", role: "Vakeel Saab" },
            { name: "Nivetha Thomas", role: "Madhavi" }
        ],
        rating: 7.2,
        releaseDate: new ISODate("2021-04-09T00:00:00Z"),
        language: "Telugu",
        director: { name: "Venu Sriram", experience: 7 },
        boxOffice: { domestic: 150, international: 60 }
    },
    {
        title: "Bhale Bhale Magadivoy",
        releaseYear: 2015,
        genres: ["Comedy", "Romance"],
        cast: [
            { name: "Nani", role: "Lucky" },
            { name: "Lavanya Tripathi", role: "Nandini" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2015-09-04T00:00:00Z"),
        language: "Telugu",
        director: { name: "Maruthi", experience: 10 },
        boxOffice: { domestic: 80, international: 30 }
    }
]);

db.movies.insertMany([
    {
        title: "Drishyam",
        releaseYear: 2013,
        genres: ["Drama", "Thriller"],
        cast: [
            { name: "Mohanlal", role: "Georgekutty" },
            { name: "Meena", role: "Rani George" }
        ],
        rating: 8.7,
        releaseDate: new ISODate("2013-12-19T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Jeethu Joseph", experience: 10 },
        boxOffice: { domestic: 75, international: 10 }
    },
    {
        title: "Kalyanaraman",
        releaseYear: 2010,
        genres: ["Comedy", "Romance"],
        cast: [
            { name: "Dileep", role: "Kalyan" },
            { name: "Ramya Nambeesan", role: "Anjali" }
        ],
        rating: 7.2,
        releaseDate: new ISODate("2010-10-15T00:00:00Z"),
        language: "Malayalam",
        director: { name: "M. Rajesh", experience: 5 },
        boxOffice: { domestic: 45, international: 5 }
    },
    {
        title: "Premam",
        releaseYear: 2015,
        genres: ["Romance", "Drama"],
        cast: [
            { name: "Nivin Pauly", role: "George" },
            { name: "Sai Pallavi", role: "Malar" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2015-05-29T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Alphonse Puthren", experience: 5 },
        boxOffice: { domestic: 120, international: 30 }
    },
    {
        title: "Lucifer",
        releaseYear: 2019,
        genres: ["Action", "Thriller"],
        cast: [
            { name: "Mohanlal", role: "Stephen Nedumbally" },
            { name: "Vivek Oberoi", role: "John Vijay" }
        ],
        rating: 7.8,
        releaseDate: new ISODate("2019-03-28T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Prithviraj Sukumaran", experience: 5 },
        boxOffice: { domestic: 250, international: 80 }
    },
    {
        title: "Bangalore Days",
        releaseYear: 2014,
        genres: ["Romance", "Comedy"],
        cast: [
            { name: "Dulquer Salmaan", role: "Arjun" },
            { name: "Nazriya Nazim", role: "Aarti" }
        ],
        rating: 8.1,
        releaseDate: new ISODate("2014-05-30T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Anjali Menon", experience: 7 },
        boxOffice: { domestic: 100, international: 40 }
    },
    {
        title: "Premam",
        releaseYear: 2015,
        genres: ["Romance", "Drama"],
        cast: [
            { name: "Nivin Pauly", role: "George" },
            { name: "Sai Pallavi", role: "Malar" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2015-05-29T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Alphonse Puthren", experience: 5 },
        boxOffice: { domestic: 120, international: 30 }
    },
    {
        title: "Ennu Ninte Moideen",
        releaseYear: 2015,
        genres: ["Romance", "Drama"],
        cast: [
            { name: "Prithviraj Sukumaran", role: "Moideen" },
            { name: "Parvathy Thiruvothu", role: "Kanchanamala" }
        ],
        rating: 8.3,
        releaseDate: new ISODate("2015-09-18T00:00:00Z"),
        language: "Malayalam",
        director: { name: "R.S. Vimal", experience: 10 },
        boxOffice: { domestic: 85, international: 25 }
    },
    {
        title: "Charlie",
        releaseYear: 2015,
        genres: ["Drama", "Adventure"],
        cast: [
            { name: "Dulquer Salmaan", role: "Charlie" },
            { name: "Parvathy Thiruvothu", role: "Tessa" }
        ],
        rating: 8.2,
        releaseDate: new ISODate("2015-12-24T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Martin Prakkat", experience: 8 },
        boxOffice: { domestic: 70, international: 15 }
    },
    {
        title: "Kumbalangi Nights",
        releaseYear: 2019,
        genres: ["Drama", "Family"],
        cast: [
            { name: "Soubin Shahir", role: "Saji" },
            { name: "Fahadh Faasil", role: "Shammi" }
        ],
        rating: 8.6,
        releaseDate: new ISODate("2019-02-07T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Madhu C. Narayanan", experience: 7 },
        boxOffice: { domestic: 40, international: 10 }
    },
    {
        title: "Uyare",
        releaseYear: 2019,
        genres: ["Drama"],
        cast: [
            { name: "Parvathy Thiruvothu", role: "Pallavi" },
            { name: "Asif Ali", role: "Govind" }
        ],
        rating: 7.8,
        releaseDate: new ISODate("2019-04-26T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Sathi S. L", experience: 5 },
        boxOffice: { domestic: 50, international: 15 }
    },
    {
        title: "Angamaly Diaries",
        releaseYear: 2017,
        genres: ["Drama", "Crime"],
        cast: [
            { name: "Vijay Babu", role: "Tony" },
            { name: "Anna Reshma Rajan", role: "Anjali" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2017-03-03T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Lijo Jose Pellissery", experience: 10 },
        boxOffice: { domestic: 35, international: 10 }
    },
    {
        title: "1983",
        releaseYear: 2014,
        genres: ["Sports", "Drama"],
        cast: [
            { name: "Nivin Pauly", role: "Raghavan" },
            { name: "Sreenivasan", role: "Chettiyar" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2014-12-24T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Abrid Shine", experience: 5 },
        boxOffice: { domestic: 50, international: 15 }
    },
    {
        title: "Oru Vadakkan Selfie",
        releaseYear: 2015,
        genres: ["Comedy", "Drama"],
        cast: [
            { name: "Nivin Pauly", role: "Aji Mathew" },
            { name: "Nerina Iyer", role: "Nina" }
        ],
        rating: 7.5,
        releaseDate: new ISODate("2015-03-27T00:00:00Z"),
        language: "Malayalam",
        director: { name: "G. Prajith", experience: 5 },
        boxOffice: { domestic: 40, international: 10 }
    },
    {
        title: "Salt Mango Tree",
        releaseYear: 2015,
        genres: ["Comedy", "Drama"],
        cast: [
            { name: "Suraj Venjaramoodu", role: "Vasudevan" },
            { name: "Neeraj Madhav", role: "Kochu Preman" }
        ],
        rating: 7.0,
        releaseDate: new ISODate("2015-08-14T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Syam Praveen", experience: 6 },
        boxOffice: { domestic: 20, international: 5 }
    },
    {
        title: "Jacobinte Swargarajyam",
        releaseYear: 2016,
        genres: ["Drama", "Family"],
        cast: [
            { name: "Nivin Pauly", role: "Jacob" },
            { name: "Sai Pallavi", role: "Sarah" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2016-04-08T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Vineeth Sreenivasan", experience: 7 },
        boxOffice: { domestic: 40, international: 12 }
    },
    {
        title: "Munthirivallikal Thalirkkumbol",
        releaseYear: 2017,
        genres: ["Drama", "Family"],
        cast: [
            { name: "Mohanlal", role: "Ullas" },
            { name: "Meena", role: "Annamma" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2017-01-20T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Jibu Jacob", experience: 7 },
        boxOffice: { domestic: 40, international: 10 }
    },
    {
        title: "Koode",
        releaseYear: 2018,
        genres: ["Drama", "Fantasy"],
        cast: [
            { name: "Prithviraj Sukumaran", role: "Joshua" },
            { name: "Nazriya Nazim", role: "Amalu" }
        ],
        rating: 7.7,
        releaseDate: new ISODate("2018-07-14T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Anjali Menon", experience: 10 },
        boxOffice: { domestic: 30, international: 10 }
    },
    {
        title: "Thondimuthalum Driksakshiyum",
        releaseYear: 2017,
        genres: ["Drama", "Thriller"],
        cast: [
            { name: "Fahadh Faasil", role: "Suni" },
            { name: "Suraj Venjaramoodu", role: "Prakashan" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2017-06-30T00:00:00Z"),
        language: "Malayalam",
        director: { name: "Dileesh Pothan", experience: 8 },
        boxOffice: { domestic: 30, international: 8 }
    }
]);

db.movies.insertMany([
    {
        title: "Swaas",
        releaseYear: 2004,
        genres: ["Drama"],
        cast: [
            { name: "Nana Patekar", role: "Vishwanath" },
            { name: "Medha Manjrekar", role: "Gauri" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2004-04-23T00:00:00Z"),
        language: "Marathi",
        director: { name: "Nandita Das", experience: 5 },
        boxOffice: { domestic: 25, international: 5 }
    },
    {
        title: "Court",
        releaseYear: 2014,
        genres: ["Drama"],
        cast: [
            { name: "Vira Sathidar", role: "Nathuram" },
            { name: "Geetanjali Kulkarni", role: "Vimal" }
        ],
        rating: 8.1,
        releaseDate: new ISODate("2014-02-13T00:00:00Z"),
        language: "Marathi",
        director: { name: "Chaitanya Tamhane", experience: 5 },
        boxOffice: { domestic: 10, international: 2 }
    },
    {
        title: "Fandry",
        releaseYear: 2013,
        genres: ["Drama"],
        cast: [
            { name: "Shetal Kamat", role: "Pune" },
            { name: "Rajeshwari Kharat", role: "Jadu" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2013-02-12T00:00:00Z"),
        language: "Marathi",
        director: { name: "Nagraj Manjule", experience: 7 },
        boxOffice: { domestic: 50, international: 15 }
    },
    {
        title: "Natrang",
        releaseYear: 2010,
        genres: ["Drama", "Musical"],
        cast: [
            { name: "Atul Kulkarni", role: "Guna" },
            { name: "Medha Manjrekar", role: "Madhavi" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2010-01-01T00:00:00Z"),
        language: "Marathi",
        director: { name: "Rajeev Patil", experience: 8 },
        boxOffice: { domestic: 35, international: 8 }
    },
    {
        title: "Dhurala",
        releaseYear: 2020,
        genres: ["Action", "Drama"],
        cast: [
            { name: "Sharad Kelkar", role: "Leader" },
            { name: "Makarand Deshpande", role: "Fakir" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2020-02-07T00:00:00Z"),
        language: "Marathi",
        director: { name: "Shaunak Vyas", experience: 5 },
        boxOffice: { domestic: 100, international: 30 }
    },
    {
        title: "Timepass",
        releaseYear: 2014,
        genres: ["Romance", "Drama"],
        cast: [
            { name: "Prathamesh Parab", role: "Dagdu" },
            { name: "Ketaki Mategaonkar", role: "Paru" }
        ],
        rating: 7.7,
        releaseDate: new ISODate("2014-03-13T00:00:00Z"),
        language: "Marathi",
        director: { name: "Rajeev Patil", experience: 7 },
        boxOffice: { domestic: 60, international: 20 }
    },
    {
        title: "Swaas",
        releaseYear: 2004,
        genres: ["Drama"],
        cast: [
            { name: "Nana Patekar", role: "Vishwanath" },
            { name: "Medha Manjrekar", role: "Gauri" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2004-04-23T00:00:00Z"),
        language: "Marathi",
        director: { name: "Nandita Das", experience: 5 },
        boxOffice: { domestic: 25, international: 5 }
    },
    {
        title: "The Disciple",
        releaseYear: 2020,
        genres: ["Drama"],
        cast: [
            { name: "Aditya Modak", role: "Shree" },
            { name: "Sumati Jadhaw", role: "Anandini" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2020-03-13T00:00:00Z"),
        language: "Marathi",
        director: { name: "Chaitanya Tamhane", experience: 5 },
        boxOffice: { domestic: 15, international: 10 }
    },
    {
        title: "Nude",
        releaseYear: 2019,
        genres: ["Drama"],
        cast: [
            { name: "Kalyanee Mulay", role: "Uma" },
            { name: "Amit Vadhav", role: "Deepak" }
        ],
        rating: 7.5,
        releaseDate: new ISODate("2019-02-08T00:00:00Z"),
        language: "Marathi",
        director: { name: "Raam Reddy", experience: 5 },
        boxOffice: { domestic: 20, international: 5 }
    },
    {
        title: "Shwaas",
        releaseYear: 2004,
        genres: ["Drama"],
        cast: [
            { name: "Nana Patekar", role: "Vishwanath" },
            { name: "Medha Manjrekar", role: "Gauri" }
        ],
        rating: 8.4,
        releaseDate: new ISODate("2004-04-23T00:00:00Z"),
        language: "Marathi",
        director: { name: "Nandita Das", experience: 5 },
        boxOffice: { domestic: 25, international: 5 }
    },
    {
        title: "Ventilator",
        releaseYear: 2016,
        genres: ["Comedy", "Drama"],
        cast: [
            { name: "Ashutosh Gowariker", role: "Sudhir" },
            { name: "Sushant Shelar", role: "Vishal" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2016-06-24T00:00:00Z"),
        language: "Marathi",
        director: { name: "Rajesh Mapuskar", experience: 7 },
        boxOffice: { domestic: 50, international: 15 }
    },
    {
        title: "Killa",
        releaseYear: 2014,
        genres: ["Drama"],
        cast: [
            { name: "Archit Deodhar", role: "Chinu" },
            { name: "Vibhavari Deshpande", role: "Ravi" }
        ],
        rating: 7.7,
        releaseDate: new ISODate("2014-07-25T00:00:00Z"),
        language: "Marathi",
        director: { name: "Avinash Arun", experience: 6 },
        boxOffice: { domestic: 20, international: 8 }
    },
    {
        title: "Zombivli",
        releaseYear: 2022,
        genres: ["Horror", "Comedy"],
        cast: [
            { name: "Sandeep Pathak", role: "Yogesh" },
            { name: "Sumati Jadhaw", role: "Kiran" }
        ],
        rating: 7.9,
        releaseDate: new ISODate("2022-02-04T00:00:00Z"),
        language: "Marathi",
        director: { name: "Aditya Sarpotdar", experience: 7 },
        boxOffice: { domestic: 35, international: 8 }
    },
    {
        title: "Jaundya Na Balasaheb",
        releaseYear: 2017,
        genres: ["Drama", "Comedy"],
        cast: [
            { name: "Sumeet Raghavan", role: "Ashok" },
            { name: "Sayali Sanjeev", role: "Parvati" }
        ],
        rating: 7.2,
        releaseDate: new ISODate("2017-01-01T00:00:00Z"),
        language: "Marathi",
        director: { name: "Viju Mane", experience: 5 },
        boxOffice: { domestic: 40, international: 10 }
    },
    {
        title: "Mogra Phulala",
        releaseYear: 2021,
        genres: ["Romance", "Drama"],
        cast: [
            { name: "Ravi Jadhav", role: "Nandkumar" },
            { name: "Swapnil Joshi", role: "Parvati" }
        ],
        rating: 7.5,
        releaseDate: new ISODate("2021-03-04T00:00:00Z"),
        language: "Marathi",
        director: { name: "Anupam Kher", experience: 8 },
        boxOffice: { domestic: 30, international: 5 }
    },
    {
        title: "Majha Baap",
        releaseYear: 2017,
        genres: ["Comedy"],
        cast: [
            { name: "Sushant Shelar", role: "Babasaheb" },
            { name: "Aditya Joshi", role: "Ramesh" }
        ],
        rating: 7.3,
        releaseDate: new ISODate("2017-07-01T00:00:00Z"),
        language: "Marathi",
        director: { name: "Pankaj Jadhav", experience: 6 },
        boxOffice: { domestic: 40, international: 12 }
    }
]);

db.movies.insertMany([
    {
        title: "Dil Diyan Gallan",
        releaseYear: 2020,
        genres: ["Romance"],
        cast: [
            { name: "Amrinder Gill", role: "Jaggi" },
            { name: "Sargun Mehta", role: "Simran" }
        ],
        rating: 7.4,
        releaseDate: new ISODate("2020-01-03T00:00:00Z"),
        language: "Punjabi",
        director: { name: "Sunil Thakur", experience: 10 },
        boxOffice: { domestic: 50, international: 15 }
    },
    {
        title: "Angrej",
        releaseYear: 2015,
        genres: ["Drama", "Romance"],
        cast: [
            { name: "Amrinder Gill", role: "Sikander" },
            { name: "Simmi Chahal", role: "Tina" }
        ],
        rating: 8.1,
        releaseDate: new ISODate("2015-07-31T00:00:00Z"),
        language: "Punjabi",
        director: { name: "Sukhpreet Kaur", experience: 10 },
        boxOffice: { domestic: 40, international: 12 }
    },
    {
        title: "Jatt & Juliet",
        releaseYear: 2012,
        genres: ["Comedy", "Romance"],
        cast: [
            { name: "Diljit Dosanjh", role: "Jatt" },
            { name: "Neeru Bajwa", role: "Juliet" }
        ],
        rating: 7.5,
        releaseDate: new ISODate("2012-07-06T00:00:00Z"),
        language: "Punjabi",
        director: { name: "Anurag Singh", experience: 8 },
        boxOffice: { domestic: 60, international: 20 }
    },
    {
        title: "Qismat",
        releaseYear: 2018,
        genres: ["Drama", "Romance"],
        cast: [
            { name: "Ammy Virk", role: "Shiva" },
            { name: "Sargun Mehta", role: "Maahi" }
        ],
        rating: 8.0,
        releaseDate: new ISODate("2018-09-21T00:00:00Z"),
        language: "Punjabi",
        director: { name: "Jagdeep Sidhu", experience: 7 },
        boxOffice: { domestic: 75, international: 25 }
    },
    {
        title: "Sufna",
        releaseYear: 2020,
        genres: ["Romance", "Drama"],
        cast: [
            { name: "Ammy Virk", role: "Teg" },
            { name: "Sargun Mehta", role: "Shanno" }
        ],
        rating: 7.6,
        releaseDate: new ISODate("2020-02-14T00:00:00Z"),
        language: "Punjabi",
        director: { name: "Jagdeep Sidhu", experience: 7 },
        boxOffice: { domestic: 85, international: 30 }
    },
    {
        title: "Chandigarh Amritsar Chandigarh",
        releaseYear: 2019,
        genres: ["Comedy", "Romance"],
        cast: [
            { name: "Gippy Grewal", role: "Gurpreet" },
            { name: "Sargun Mehta", role: "Simran" }
        ],
        rating: 7.3,
        releaseDate: new ISODate("2019-05-24T00:00:00Z"),
        language: "Punjabi",
        director: { name: "Ksshitij Chaudhary", experience: 6 },
        boxOffice: { domestic: 50, international: 15 }
    }
]);


