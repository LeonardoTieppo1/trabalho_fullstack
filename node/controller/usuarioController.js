const mongoose = require('mongoose');




const Usuario = require('../model/usuario');




const criar = async(nome, senha) => {

    const usario = new Usuario({ nome: nome, senha: senha });

    return await usuario.save();

}




module.exports.criar = criar;