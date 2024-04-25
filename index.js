const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
	res.send("API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server is running...");
});
