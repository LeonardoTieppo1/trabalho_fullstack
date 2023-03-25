const mongoose = require('mongoose');




const Usuario = require('../model/usuario');




const criar = async(nome, senha) => {

    const usuario = new Usuario({ nome: nome, senha: senha });

    return await usuario.save();

}




module.exports.criar = criar;