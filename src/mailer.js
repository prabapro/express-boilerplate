//* SEND MAILS USING NODEMAILER (src/mailer.js)

// Load environment variables from .env file
require("dotenv").config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtppro.zoho.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.ZOHO_USERNAME,
		pass: process.env.ZOHO_PASSWORD,
	},
});

module.exports = transporter;
