//* SERVING ROUTES (src/routes.js)

// src/routes.js
const express = require("express");
const path = require("path");
const transporter = require("./mailer");

const router = express.Router();

// Load environment variables from .env file
require("dotenv").config();

// Serve static files from the 'public' directory
router.use(express.static(path.join(__dirname, "..", "public")));

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

router.get("/:page([a-zA-Z0-9_-]+)(.html)?", (req, res) => {
	const pageName = req.params.page;
	res.sendFile(path.join(__dirname, "..", "public", `${pageName}.html`));
});

router.get("/blog/:page([a-zA-Z0-9_-]+)(.html)?", (req, res) => {
	const pageName = req.params.page;
	res.sendFile(
		path.join(__dirname, "..", "public", "blog", `${pageName}.html`)
	);
});

// Route for sending emails
router.post("/send-email", async (req, res) => {
	try {
		const { to, subject, text } = req.body;

		const info = await transporter.sendMail({
			from: process.env.ZOHO_SENDER_EMAIL,
			to,
			subject,
			text,
		});

		console.log("Email sent:", info);

		res.status(200).json({
			message: "Email sent successfully",
			response: info, // Add the response data to the JSON object
		});
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({
			error: "Internal Server Error",
			response: error, // Add the response data to the JSON object
		});
	}
});

module.exports = router;
