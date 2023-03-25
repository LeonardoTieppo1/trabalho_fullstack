const mongoose = require('mongoose');

const UsuarioController = require("./controller/usuarioController")

const reciclagemController = require("./controller/reciclagemController");

const uri = "mongodb+srv://Leonardo:tesT123.2@cluster0.kcan61g.mongodb.net/trabalho?retryWrites=true&w=majority";





mongoose.connect(uri).then(async(conn) => {

    const ret = await reciclagemController.emprestar("");

    console.log(ret);

})