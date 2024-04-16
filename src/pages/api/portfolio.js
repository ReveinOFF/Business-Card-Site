const { Pool } = require("pg");

const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432,
});

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      let query = "SELECT * FROM pg_database;";
      let res = pool.query(query);
      res.status(200).json({ message: "This is a GET request" });
      break;
    case "POST":
      res.status(200).json({ message: "This is a POST request" });
      break;
    case "PUT":
      res.status(200).json({ message: "This is a PUT request" });
      break;
    case "DELETE":
      res.status(200).json({ message: "This is a DELETE request" });
      break;
  }
}
