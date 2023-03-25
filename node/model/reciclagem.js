const mongoose = require('mongoose')




const reciclagemSchema = mongoose.Schema({

    item: { type: String },

    imagem: { type: String },

    peso: { type: Number },

    data: { type: Date },

    pontos: { type: mongoose.Types.ObjectId, required: true, ref: "Usuario" },

    reciclagem: [{ type: mongoose.Types.ObjectId, ref: "Reciclagem" }],

})




const Reciclagem = mongoose.model("Reciclagem", reciclagemSchema)

module.exports = Reciclagem;