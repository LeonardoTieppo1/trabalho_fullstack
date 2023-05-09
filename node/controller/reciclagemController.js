const mongoose = require('mongoose');

const Reciclagem = require('../model/reciclagem');


const reciclagem = async(UsuarioId) => {

    const usuario = await Usuario.findById(UsuarioId).exec();

    try {

        session = await mongoose.startSession();

        session.startTransaction();

        if (usuario) {

            let reciclagem = new Reciclagem({ item: item, imagem: imagem });

            reciclagem = await reciclagem.save();

            usuario.reciclagem.push(reciclagem);

            await usuario.save();

            session.commitTransaction();

            return reciclagem;

        }




    } catch (err) {

        console.log(err);

        session.cancelTransaction();

    }

}

const criar = async(item, imagem, peso, data, pontos, usuario) => {

    const reciclagem = new Reciclagem({ item: item, imagem: imagem, peso: peso, data, pontos: pontos, usuario: usuario });

    return await reciclagem.save();

}

const update = async(id, img) => {
    try {
        const reciclagem = await Reciclagem.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { imagem:img } });
        return reciclagem
    } catch (err) {
        return console.error(err);
    }
}

const read = async(id) => {
    try {
        const reciclagem = Reciclagem.findOne({ _id: id }, "reciclagem.item-id").exec();
        return reciclagem;
    } catch (err) {
        return console.error(err);
    }
}

const deletar = async(id) => {
    try {
        const reciclagem = Reciclagem.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
        return reciclagem;
    } catch (err) {
        return console.error(err);
    }
}

const readAny = async() => {
    try {
        const reciclagem = Reciclagem.find().exec();
        return reciclagem;
    } catch (err) {
        return console.error(err);
    }
}


module.exports.criar = criar;
module.exports.update = update;
module.exports.read = read;
module.exports.deletar = deletar;
module.exports.readAny = readAny;
module.exports.reciclagem = reciclagem;