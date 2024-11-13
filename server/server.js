const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to test server
app.get("/", (req, res) => {
  res.send("Server is up and running");
});

// Contact form POST route
app.post("/send", async (req, res) => {
  const { fullName, email, message } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email address (sender)
      pass: process.env.EMAIL_PASS, // Your email password (or app password)
    },
  });

  // Mail options
  const mailOptions = {
    from: email, // Sender's email (the user's email)
    to: process.env.EMAIL_RECEIVER, // Recipient's email (the admin's email)
    subject: `New message from ${fullName}`, // Subject of the email
    text: `You have a new message from: \n\n Name: ${fullName} \n Email: ${email} \n Message: \n ${message}`, // Message body
  };

  try {
    await transporter.sendMail(mailOptions); // Send the email
    res.status(200).send({ message: "Email sent successfully!" }); // Success response
  } catch (error) {
    res.status(500).send({ message: "Failed to send email", error }); // Error response
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
