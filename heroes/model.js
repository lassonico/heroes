const mongoose = require("mongoose");
const { heroesSchema } = require("./schema.js");

const heroModel = mongoose.model("heroes", heroesSchema)