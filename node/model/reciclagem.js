const mongoose = require('mongoose')




const reciclagemSchema = mongoose.Schema({

    item: { type: String, required: true },

    imagem: { type: String, required: true },

    peso: { type: Number, required: true },

    data: { type: Date, required: true },

    pontos: { type: mongoose.Types.ObjectId, required: true, ref: "Usuario" },

    reciclagem: [{ type: mongoose.Types.ObjectId, ref: "Reciclagem" }],

})




const Reciclagem = mongoose.model("Reciclagem", reciclagemSchema)

module.exports = Reciclagem;