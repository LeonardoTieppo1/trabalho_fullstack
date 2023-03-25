const mongoose = require('mongoose')




const usuarioSchema = mongoose.Schema({

    nome: { type: String, required: true },

    senha: { type: String, required: true },

    pontos: { type: String, required: true },

    longitude: { type: String, required: true },

    latitude: { type: String, required: true },

})




const Usuario = mongoose.model("Usuario", usuarioSchema)

module.exports = Usuario;