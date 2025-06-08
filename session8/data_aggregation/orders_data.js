db.orders.insertMany([
    {
      _id: ObjectId("60c72b2f9b1e8a5f1f0e6a01"),
      customer_id: "CUST1001",
      amount: 2999,
      status: "completed",
      payment_mode: "UPI",
      city: "Mumbai",
      order_date: ISODate("2025-06-01T10:00:00Z")
    },
    {
      _id: ObjectId("60c72b2f9b1e8a5f1f0e6a02"),
      customer_id: "CUST1002",
      amount: 849,
      status: "pending",
      payment_mode: "COD",
      city: "Delhi",
      order_date: ISODate("2025-06-02T13:45:00Z")
    },
    {
      _id: ObjectId("60c72b2f9b1e8a5f1f0e6a03"),
      customer_id: "CUST1003",
      amount: 1599,
      status: "completed",
      payment_mode: "Credit Card",
      city: "Bengaluru",
      order_date: ISODate("2025-06-03T09:20:00Z")
    },
    {
      _id: ObjectId("60c72b2f9b1e8a5f1f0e6a04"),
      customer_id: "CUST1001",
      amount: 750,
      status: "completed",
      payment_mode: "UPI",
      city: "Mumbai",
      order_date: ISODate("2025-06-04T11:10:00Z")
    }
  ])
  