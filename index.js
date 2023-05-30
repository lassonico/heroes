import express from "express"
import mongoose from "mongoose"
import { heroesRouter } from "./heroes/routes.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json())
app.use("/heroes", heroesRouter);

// conexion

app.listen(3000, () => mongoose.connect(process.env.DB_CONNECTION));