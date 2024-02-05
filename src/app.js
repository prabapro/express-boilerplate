// src/app.js
const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // Parse JSON data

// Mount the routes at the desired path
app.use("/", routes);

app.use((req, res) => {
	res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
