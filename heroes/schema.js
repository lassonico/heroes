const mongoose = require("mongoose");

const heroesSchema = mongoose.Schema(
{
    name: {
        type : String,
        require : true
    },
    avatar: {
        type : String,
        require : true
    },
    comics: {
        type : Number,
        require : true
    },
    peliculas : {
        type : Number,
        require : true
    },
},
    {
        timestamp : true
    }
)