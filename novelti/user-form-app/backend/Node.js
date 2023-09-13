const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "infy",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Create a user
app.post("/createUser", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobileNo,
    address1,
    address2,
    state,
    city,
    country,
    zipCode,
  } = req.body;

  const sql = `INSERT INTO users (first_name, last_name, email, mobile_no, address1, address2, state, city, country, zip_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(
    sql,
    [
      firstName,
      lastName,
      email,
      mobileNo,
      address1,
      address2,
      state,
      city,
      country,
      zipCode,
    ],
    (err, result) => {
      if (err) {
        console.error("Error creating user:", err);
        res.status(500).send("Error creating user");
      } else {
        console.log("User created");
        res.status(200).send("User created");
      }
    }
  );
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
