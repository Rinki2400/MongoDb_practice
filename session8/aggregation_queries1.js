// use aggregation_db;
// switched to db aggregation_db

// insert data into products collection
// show collections;

// 1) Map Reduce

db.products.mapReduce(
  function () {
    emit(this.category, this.quantity);
  },
  function (key, values) {
    return Array.sum(values);
  },
  {
    out: "category_totals"
  }
);

// DeprecationWarning: Collection.mapReduce() is deprecated. Use an aggregation instead.

// show collections;

db.category_totals.find();

// 2) Single Purpose Aggregation Methods

// a) count
// b) distinct
// c) group

db.orders.count({ status: "completed" });

// DeprecationWarning: Collection.count() is deprecated. Use countDocuments or estimatedDocumentCount.
// 3

db.orders.countDocuments({ status: "completed" });

db.orders.estimatedDocumentCount({ status: "completed" });

db.orders.distinct("city");
// [ 'Bengaluru', 'Delhi', 'Mumbai' ]

// 3. Aggregation Pipeline

db.orders.aggregate([
  { $match: { "status": "completed" } }, // Stage 1
  { $group: { _id: "$customer_id", totalSpend: { $sum: "$amount" } } }, // Stage 2
  { $sort: { totalSpend: 1 } } // Stage 3
])


// db.collectionName.aggregate([
// {}, Stage 1
// {}, Stage 2
// {}, Stage 2
// .
// .
// .
// .
// {} Stage N
// ])

// a) geoNear

db.places.aggregate([
  {
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [77.2167, 28.6358] // Connaught Place
      },
      distanceField: "dist.calculated",
      maxDistance: 10000, // 10 km 
      spherical: true,
    }
  }
])

// MongoServerError[IndexNotFound]: $geoNear requires a 2d or 2dsphere index, but none were found
// Create a 2dsphere index on the coordinates field
db.places.createIndex({ coordinates: "2dsphere" });


db.places.aggregate([
  {
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [77.2167, 28.6358] // Connaught Place
      },
      distanceField: "dist.calculated",
      maxDistance: 10000, // 10 km 
      spherical: true,
    }
  }
])

db.places.aggregate([
  {
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [77.2167, 28.6358] // Connaught Place
      },
      distanceField: "dist.calculated",
      maxDistance: 1000, // 1 km 
      spherical: true,
    }
  }
])

// b. GroupBy

db.movies.aggregate([
  { $group: { _id: "$releaseYear" } } // group by releaseYear
])

db.movies.aggregate([
  { $group: { _id: "$releaseYear", allMovies: { $push: "$title" } } }
])


db.movies.aggregate([
  { $group: { _id: "$releaseYear", allMovies: { $push: "$title" } } }
])

db.movies.aggregate([
  { $group: { _id: "$releaseYear", count: { $sum: 1 } } },
  { $sort: { count: -1 } } // sort by count in descending order
])


db.movies.aggregate([
  { $group: { _id: "$releaseYear", allMovies: { $push: "$$ROOT" } } }
])


db.movies.aggregate([
  { $group: { _id: "$releaseYear", allMovies: { $push: { title: "$title", rating: "$rating", language: "$language" } } } }
])

// c. limit

db.movies.aggregate([
  { $group: { _id: "$releaseYear", allMovies: { $push: "$title" } } },
  { $limit: 5 } // limit to 5 groups
])

// d. match

db.orders.aggregate([
  { $match: { "status": "pending" } }, // Stage 1
])

// e. out

db.orders.aggregate([
  { $match: { "status": "completed" } }, // Stage 1
  { $out: "completed_orders" }
])

// f. skip and limit

db.movies.aggregate([
  { $match: { "rating":{ $gt: 8 }} }, // Stage 1
  { $skip : 5}, // Stage 2
  { $limit: 2 } // Stage 3
])
// g. sort

db.movies.aggregate([
  { $sort : {"releaseYear"  : -1} } // sort by releaseYear in descending order
])

// h. project
db.movies.aggregate([
  { $match: { "rating":{ $gt: 8 }} }, // Stage 1
  { $limit: 10 }, // Stage 2
  { $project: { title: 1, rating: 1, _id: 0,genres:1,cast:1 }} // Stage 3
])

// i. redact
db.records.aggregate([
  { $redact: {
      $cond: {
        if: { $eq: ["$accessLevel", "public"] },
        then: "$$KEEP",
        else: "$$PRUNE"
      }
    }
  }
])

// j. unwind

db.directors.aggregate([
  {$unwind: "$languages" }, // Stage 1
])

[
  {
    $unwind: "$languages"
  },
  {
    $group:
      {
        _id: "$languages",
        totalDirectors: {
          $sum: 1
        }
      }
  }
]