const mongoose = require('mongoose');
const Premio = require('../model/premio');

const criar = async(descricao, pontos, quantidade) => {

    const premio = new Premio({ descricao: descricao, pontos: pontos, quantidade: quantidade });

    return await premio.save();

}

const update = async(id, newD) => {
    try {

        const premio = Premio.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { descricao: newD } });

        return premio;
    } catch (err) {
        return console.error(err);
    }
}



const read = async(id) => {
    try {
        const premio = Premio.findOne({ _id: id }, "premio.descricao-id").exec();
        return premio
    } catch (err) {
        return console.error(err);
    }
}

const readAny = async() => {
    try {
        const premio = Premio.find().exec();
        return premio;
    } catch (err) {
        return console.error(err);
    }
}

const deletar = async(id) => {
    try {
        const premio = Premio.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
        return premio;
    } catch (err) {
        return console.error(err);
    }
}




module.exports.criar = criar;
module.exports.update = update;
module.exports.read = read;
module.exports.readAny = readAny;
module.exports.deletar = deletar;