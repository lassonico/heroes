import mongoose from "mongoose";
import { heroesSchema } from "./schema.js"

export const heroModel = mongoose.model("heroes", heroesSchema)