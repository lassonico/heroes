const express = require("express");
const { heroModel } = require("./model.js"); 

const heroesRouter = express.Router()

heroesRouter.post("/", async (req, res) =>{
    const heroeCreado = await heroModel.create(req.body)
    res.status(201).send(heroeCreado)
});

heroesRouter.get("/", async (req, res) => {
    const heroes = await heroModel.find({})
    res.status(200).send(heroes)
})

heroesRouter.get("/:id", async (req, res) => {
    const heroe = await heroModel.findOne({ _id: req.params.id })
    res.status(200).send(heroe)
})