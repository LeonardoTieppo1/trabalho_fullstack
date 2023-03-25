const mongoose = require('mongoose')




const usuarioSchema = mongoose.Schema({

    nome: { type: String, required: true },

    senha: { type: String, required: true },

    pontos: { type: Number },

    longitude: { type: Number },

    latitude: { type: Number },

})




const Usuario = mongoose.model("Usuario", usuarioSchema)

module.exports = Usuario;