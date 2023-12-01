const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Endpoint to handle form submissions
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    // Configure your email service here
  });

  // Email content
  let mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
