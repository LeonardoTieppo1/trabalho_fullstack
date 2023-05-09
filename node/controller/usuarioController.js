const mongoose = require('mongoose');
const Usuario = require('../model/usuario');

const criar = async(nome, senha, pontos, latitude, longitude) => {

    const usuario = new Usuario({
        nome: nome,
        senha: senha,
        pontos: pontos,
        latitude: latitude,
        longitude: longitude
    });

    const ret = await usuario.save();
    return ret;
}
var usuario = [];

const login = (nome, senha) => {
        const valido = Usuario.findOne({nome: nome, senha: senha});
        if (valido) {
            return { valido: true };
        } else return { valido: false };
}

const update = async(id, senha) => {
    try {
        const usuario = Usuario.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { senha: senha } });
        return usuario;
    } catch (err) {
        return console.error(err);
    }
}

const read = async(id) => {
    try {
        const usuario = Usuario.findOne({ _id: id }, "usuario.nome-id").exec();
        return usuario;
    } catch (err) {
        return console.error(err);
    }
}

const readAny = async() => {
    try {
        const usuario = Usuario.find().exec();
        return usuario;
    } catch (err) {
        return console.error(err);
    }
}

const deletar = async(id) => {
    try {
        const usuario = Usuario.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
        return usuario;
    } catch (err) {
        return console.error(err);
    }
}




module.exports.criar = criar;
module.exports.update = update;
module.exports.read = read;
module.exports.readAny = readAny;
module.exports.deletar = deletar;
module.exports.login=login;