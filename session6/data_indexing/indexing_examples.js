db.movies.insertMany([
    { name: "Dangal", year: 2016, director: "Nitesh Tiwari", genre: "Drama", rating: 8.4 },
    { name: "3 Idiots", year: 2009, director: "Rajkumar Hirani", genre: "Comedy", rating: 8.4 },
    { name: "Lagaan", year: 2001, director: "Ashutosh Gowariker", genre: "Drama", rating: 8.1 },
    { name: "Sholay", year: 1975, director: "Ramesh Sippy", genre: "Action", rating: 8.0 },
    { name: "Bahubali", year: 2015, director: "S.S. Rajamouli", genre: "Action", rating: 8.0 },
    { name: "Swades", year: 2004, director: "Ashutosh Gowariker", genre: "Drama", rating: 8.2 }
]);

db.movies.insertMany([
    { name: "Rockstar", year: 2011, director: "Imtiaz Ali", genre: "Drama", rating: 7.9 },
    { name: "Barfi!", year: 2012, director: "Anurag Basu", genre: "Drama", rating: 8.1 },
    { name: "Paan Singh Tomar", year: 2012, director: "Tigmanshu Dhulia", genre: "Drama", rating: 8.1 },
    { name: "Queen", year: 2013, director: "Vikas Bahl", genre: "Comedy", rating: 8.2 },
    { name: "PK", year: 2014, director: "Rajkumar Hirani", genre: "Comedy", rating: 8.1 },
    { name: "Chhichhore", year: 2019, director: "Nitesh Tiwari", genre: "Drama", rating: 8.2 }
]);

db.events.insertMany([
    { name: "Mumbai Marathon", date: new Date("2024-01-15"), tags: ["sports", "marathon", "outdoor"] },
    { name: "Jaipur Literature Festival", date: new Date("2024-01-20"), tags: ["festival", "literature", "culture"] },
    { name: "Kumbh Mela", date: new Date("2025-04-01"), tags: ["religious", "culture", "festival"] },
    { name: "Indian Premier League", date: new Date("2024-04-01"), tags: ["sports", "cricket", "tournament"] },
    { name: "Pushkar Fair", date: new Date("2024-11-05"), tags: ["fair", "culture", "animals"] },
    { name: "Rann Utsav", date: new Date("2024-12-10"), tags: ["festival", "culture", "music"] }
]);


db.indian_landmarks.insertMany([
    {
        name: "India Gate",
        location_2d: [77.2295, 28.6129],     // longitude, latitude
        location_2dsphere: { type: "Point", coordinates: [77.2295, 28.6129] }
    },
    {
        name: "Taj Mahal",
        location_2d: [78.0421, 27.1751],
        location_2dsphere: { type: "Point", coordinates: [78.0421, 27.1751] }
    },
    {
        name: "Red Fort",
        location_2d: [77.2410, 28.6562],
        location_2dsphere: { type: "Point", coordinates: [77.2410, 28.6562] }
    },
    {
        name: "Gateway of India",
        location_2d: [72.8347, 18.9220],
        location_2dsphere: { type: "Point", coordinates: [72.8347, 18.9220] }
    },
    {
        name: "Charminar",
        location_2d: [78.4744, 17.3616],
        location_2dsphere: { type: "Point", coordinates: [78.4744, 17.3616] }
    }
]);

db.events.insertMany([
    {
        eventName: "Tech Seminar Bangalore",
        tags: ["seminar", "technology", "education"],
        description: "An insightful seminar on AI and machine learning in Bangalore."
    },
    {
        eventName: "Mumbai Sports Festival",
        tags: ["sports", "festival", "outdoor"],
        description: "A fun-packed sports event featuring cricket, football, and more."
    },
    {
        eventName: "Bangalore Startup Meetup",
        tags: ["startup", "networking", "technology"],
        description: "Networking event for tech startups in Bangalore."
    },
    {
        eventName: "Cultural Fest Delhi",
        tags: ["culture", "festival", "music"],
        description: "Annual cultural festival with dance, music, and art."
    },
    {
        eventName: "Yoga Workshop Rishikesh",
        tags: ["yoga", "wellness", "seminar"],
        description: "Workshop on mindfulness and yoga practices in Rishikesh."
    }
]);


db.events.insertMany([
    {
        eventName: "Tech Seminar Bangalore - 2",
        tags: ["seminar", "technology", "education"],
        description: "An insightful seminar on AI and machine learning in Bangalore part 2."
    },
    {
        eventName: "Mumbai Sports Festival - 2",
        tags: ["sports", "festival", "outdoor"],
        description: "A fun-packed sports event featuring cricket, football, and more part 2"
    },
    {
        eventName: "Bangalore Startup Meetup - 2",
        tags: ["startup", "networking", "technology"],
        description: "Networking event for tech startups in Bangalore part 2."
    },
    {
        eventName: "Cultural Fest Delhi - 2",
        tags: ["culture", "festival", "music"],
        description: "Annual cultural festival with dance, music, and art part 2."
    },
    {
        eventName: "Yoga Workshop Rishikesh - 2 ",
        tags: ["yoga", "wellness", "seminar"],
        description: "Workshop on mindfulness and yoga practices in Rishikesh part 2."
    }
]);