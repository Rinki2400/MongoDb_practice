// 1. Find Queries
// A. By Tags
db.leads.find({ tags: "follow_up" });

db.leads.find({ tags: { $in: ["follow_up", "low_quality"] } });

db.leads.find({
  tags: { $all: ["orthopedic", "high_intent"] }
});

db.leads.find({
  tags: { $size: 2 }
});

// B. By Interactions (Channel + Agent)
db.leads.find({
  interactions: {
    $all: [
      { $elemMatch: { channel: "Call", agent: "Front Desk" } }
    ]
  }
});

db.leads.find({
  interactions: {
    $all: [
      { $elemMatch: { channel: "Call", agent: "Front Desk" } },
      { $elemMatch: { channel: "SMS", agent: "IntakeBot" } }
    ]
  }
});

db.leads.find({
  interactions: {
    $elemMatch: {
      channel: "WhatsApp",
      agent: "Follow-up Bot"
    }
  }
});

db.leads.find({
  "interactions.agent": /front desk/i
});

// C. By Score
db.leads.find({
  "score.leadQuality": { $gte: 80 },
  "score.engagement": { $gt: 70 }
});

// D. By Array Size
db.leads.find({
  $expr: { $gt: [ { $size: "$interactions" }, 1 ] }
});

db.leads.find({
  $expr: { $gt: [ { $size: "$interactions" }, 1 ] },
  interactions: {
    $all: [
      { $elemMatch: { channel: "Call", agent: "Front Desk" } },
      { $elemMatch: { channel: "SMS", agent: "IntakeBot" } }
    ]
  }
});

E. Projection
db.leads.find({}, {
  _id: 0,
  name: 1,
  "score.leadQuality": 1
});


// 2. Count Queries
// A. By Array Size
db.leads.countDocuments({
  $expr: { $gt: [ { $size: "$interactions" }, 1 ] }
});

db.leads.countDocuments({
  interactions: { $size: 3 }
});

// B. By Agent in Interactions
db.leads.countDocuments({
  "interactions.agent": "IntakeBot"
});

db.leads.countDocuments({
  "interactions.agent": "Follow-up Bot"
});


// 3. Update Queries
// A. Update Agents in Interactions
// Update One or All Elements
db.leads.updateOne(
  { "interactions.channel": "Call" },
  { $set: { "interactions.$.agent": "Updated Agent" } }
);

db.leads.updateMany(
  {},
  { $set: { "interactions.$[].agent": "Reassigned" } }
);

db.leads.updateMany(
  {},
  { $set: { "interactions.$[inter].agent": "Escalated" } },
  { arrayFilters: [ { "inter.channel": "Call" } ] }
);

db.leads.findOneAndUpdate(
  { "interactions.channel": "Call" },
  { $set: { "interactions.$[inter].agent": "Escalated" } },
  {
    arrayFilters: [ { "inter.channel": "Call" } ],
    returnDocument: "after"
  }
);

db.leads.updateOne(
  { "interactions.agent": "Follow-up Bot" },
  { $inc: { "interactions.$.score": 1 } }
);

// Using bulkWrite
db.leads.bulkWrite([
  {
    updateMany: {
      filter: { "interactions.agent": "IntakeBot" },
      update: {
        $set: { "interactions.$[i].agent": "Reassigned Bot" }
      },
      arrayFilters: [
        { "i.agent": "IntakeBot" }
      ]
    }
  },
  {
    updateMany: {
      filter: { "tags": "low_quality" },
      update: {
        $pull: { tags: "low_quality" }
      }
    }
  }
]);

// B. Update Tags
// Add / Push Tags
db.leads.updateOne(
  { name: "John Doe" },
  {
    $push: {
      tags: {
        $each: ["urgent", "follow_up"]
      }
    }
  }
);

db.leads.updateOne(
  { name: "John Doe" },
  {
    $addToSet: {
      tags: { $each: ["follow_up", "urgent"] }
    }
  }
);

db.leads.updateOne(
  {},
  {
    $push: {
      tags: {
        $each: ["new_tag"],
        $position: 0
      }
    }
  }
);

db.leads.updateOne(
  {},
  {
    $push: {
      tags: {
        $each: ["temp"],
        $slice: 3
      }
    }
  }
);

// Remove / Pull Tags
db.leads.updateOne(
  { name: "Nettie Stiedemann" },
  { $pop: { tags: 1 } }
);

db.leads.updateMany(
  {},
  { $pull: { tags: "low_quality" } }
);

db.leads.updateMany(
  {},
  { $pullAll: { tags: ["follow_up", "low_quality"] } }
);

// Conditional Tag Update
db.leads.updateMany(
  {},
  {
    $set: { "tags.$[tag]": "urgent" }
  },
  {
    arrayFilters: [ { tag: "high_intent" } ]
  }
);

// Add/Remove Specific from Test Lead
db.leads.updateOne(
  { name: "Test Lead" },
  { $addToSet: { tags: "urgent" } }
);

db.leads.updateOne(
  { name: "Test Lead" },
  { $pull: { tags: "follow_up" } }
);

db.leads.updateOne(
  { name: "Test Lead" },
  { $pullAll: { tags: ["urgent", "low_quality"] } }
);

db.leads.updateOne(
  { name: "Test Lead" },
  {
    $push: {
      tags: {
        $each: ["new", "orthopedic"],
        $position: 0
      }
    }
  }
);

// C. Other Updates
// Increment Scores
db.leads.updateOne(
  { "score.leadQuality": { $lt: 90 } },
  {
    $inc: { "score.leadQuality": 5 }
  }
);

// Push Interaction
db.leads.updateOne(
  {},
  {
    $push: {
      interactions: {
        $each: [{ timestamp: new Date(), agent: "Bot", channel: "SMS" }],
        $sort: { timestamp: -1 }
      }
    }
  }
);

db.leads.updateOne(
  { name: "Test Lead" },
  {
    $push: {
      interactions: {
        $each: [
          {
            channel: "SMS",
            message: "Reminder",
            timestamp: new Date(),
            agent: "IntakeBot"
          }
        ],
        $sort: { timestamp: -1 },
        $slice: 2
      }
    }
  }
);

// Update All Agents in Interactions
db.leads.updateOne(
  { name: "Test Lead" },
  {
    $set: {
      "interactions.$[].agent": "Updated Agent"
    }
  }
);

db.leads.updateOne(
  { name: "Test Lead" },
  {
    $set: {
      "interactions.$[i].agent": "Escalated Agent"
    }
  },
  {
    arrayFilters: [
      { "i.channel": "Call" }
    ]
  }
);


// 4. Insert Sample Document
db.leads.insertOne({
  name: "Test Lead",
  phone: "+91 9876543210",
  city: "Mumbai",
  clinicId: ObjectId(),
  status: "lead",
  tags: ["urgent", "follow_up"],
  score: { leadQuality: 75, engagement: 80 },
  interactions: [
    {
      channel: "Call",
      message: "Initial consultation",
      timestamp: new Date(),
      agent: "Front Desk"
    },
    {
      channel: "WhatsApp",
      message: "Follow-up sent",
      timestamp: new Date(),
      agent: "Follow-up Bot"
    }
  ],
  createdAt: new Date()
});
