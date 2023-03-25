const mongoose = require('mongoose');




const Reciclagem = require('../model/reciclagem');

const Usuario = require('../model/usuario');




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




module.exports.reciclagem = reciclagem;