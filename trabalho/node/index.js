const mongoose = require('mongoose')

const express = require("express")

const usuarioRoute = require("./route/usuario")

const app = express()

app.use(usuarioRoute)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use((req, res) => {
    res.status(404).json({ msg: "Endpoint inexistente!" })
})

const URL = "mongodb+srv://Leonardo:tesT123.2@cluster0.kcan61g.mongodb.net/trabalho?retryWrites=true&w=majority";

mongoose.connect(URL).then(() => {
    app.listen(3000, () => console.log("Iniciando o servidor"))
}).catch((err) => console.log(err))