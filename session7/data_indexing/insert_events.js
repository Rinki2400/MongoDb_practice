const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db('bookmyshow');
    const collection = database.collection('events');

    const sampleNames = ['Concert', 'Workshop', 'Seminar', 'Festival', 'Meetup', 'Conference', 'Webinar', 'Exhibition', 'Gala', 'Carnival'];
    const sampleTags = ['music', 'art', 'technology', 'education', 'health', 'sports', 'entertainment', 'networking'];
    const sampleLocations = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Surat'];

    function getRandomTags() {
      const numberOfTags = Math.floor(Math.random() * 5) + 1;
      const tags = new Set();
      while (tags.size < numberOfTags) {
        tags.add(sampleTags[Math.floor(Math.random() * sampleTags.length)]);
      }
      return Array.from(tags);
    }

    const events = [];
    for (let i = 0; i < 10000; i++) {
      const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
      const randomLocation = sampleLocations[Math.floor(Math.random() * sampleLocations.length)];
      events.push({
        eventName: `${randomName} ${i}`,
        eventDate: new Date(),
        location: randomLocation,
        tags: getRandomTags(),
        description: `Description of ${randomName} ${i} at ${randomLocation}`
      });
    }

    const result = await collection.insertMany(events);
    console.log(`${result.insertedCount} documents were inserted`);

    await collection.createIndex({ eventName: 1 });
    console.log("Index created on eventName field");

    console.time("Query without index");
    await collection.find({ eventName: "Concert 9999" }).toArray();
    console.timeEnd("Query without index");

    console.time("Query with index");
    await collection.find({ eventName: "Concert 9999" }).hint({ eventName: 1 }).toArray();
    console.timeEnd("Query with index");

  } finally {
    await client.close();
  }
}

main().catch(console.error);
