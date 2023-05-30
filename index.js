const express = require("express");
const mongoose = require("mongoose");
const { heroesRouter } = require("./heroes/routes.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json())
app.use("/heroes", heroesRouter);

// conexion

app.listen(3000, () => mongoose.connect(process.env.DB_CONNECTION));