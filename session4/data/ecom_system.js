db.ecom_orders.insertMany([
    {
      order_id: "ORD1001", customer_name: "Ravi Kumar", city: "Bangalore",
      items: ["mobile", "case","speaker"], total_amount: 12000, payment_mode: "UPI",
      status: "shipped", placed_at: new Date("2025-05-10T10:00:00Z")
    },
    {
      order_id: "ORD1002", customer_name: "Anjali Gupta", city: "Kolkata",
      items: ["laptop","speaker"], total_amount: 48000, payment_mode: "Credit Card",
      status: "processing", placed_at: new Date("2025-05-11T09:00:00Z")
    },
    {
      order_id: "ORD1003", customer_name: "Kiran Bhat", city: "Chennai",
      items: ["headphones", "speaker"], total_amount: 9000, payment_mode: "COD",
      status: "cancelled", placed_at: new Date("2025-05-12T08:30:00Z")
    },
    {
      order_id: "ORD1004", customer_name: "Amit Desai", city: "Mumbai",
      items: ["speaker", "keyboard", "mouse"], total_amount: 5500, payment_mode: "NetBanking",
      status: "confirmed", placed_at: new Date("2025-05-13T14:45:00Z")
    },
    {
      order_id: "ORD1005", customer_name: "Meena Joshi", city: "Pune",
      items: ["smartwatch","speaker"], total_amount: 18000, payment_mode: "UPI",
      status: "shipped", placed_at: new Date("2025-05-14T12:20:00Z")
    },
    {
      order_id: "ORD1006", customer_name: "Rohan Mehta", city: "Delhi",
      items: ["speaker","monitor", "HDMI cable","speaker"], total_amount: 15500, payment_mode: "Credit Card",
      status: "processing", placed_at: new Date("2025-05-15T16:00:00Z")
    },
    {
      order_id: "ORD1007", customer_name: "Neha Yadav", city: "Ahmedabad",
      items: ["tablet"], total_amount: 22000, payment_mode: "Debit Card",
      status: "confirmed", placed_at: new Date("2025-05-16T11:10:00Z")
    },
    {
      order_id: "ORD1008", customer_name: "Sandeep Rao", city: "Jaipur",
      items: ["printer", "ink cartridge"], total_amount: 8500, payment_mode: "COD",
      status: "shipped", placed_at: new Date("2025-05-17T13:40:00Z")
    },
    {
      order_id: "ORD1009", customer_name: "Sneha Kapoor", city: "Hyderabad",
      items: ["gaming mouse"], total_amount: 3500, payment_mode: "UPI",
      status: "delivered", placed_at: new Date("2025-05-18T10:30:00Z")
    },
    {
      order_id: "ORD1010", customer_name: "Varun Singh", city: "Bhopal",
      items: ["router", "ethernet cable"], total_amount: 4900, payment_mode: "NetBanking",
      status: "cancelled", placed_at: new Date("2025-05-19T09:50:00Z")
    }
  ])
  