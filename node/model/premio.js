const mongoose = require('mongoose')




const premioSchema = mongoose.Schema({

    titulo: { type: String, required: true },

    autor: { type: String, required: true }

})




const Premio = mongoose.model("Premio", premioSchema)

module.exports = Premio;