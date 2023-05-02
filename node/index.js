const mongoose = require('mongoose');

const UsuarioController = require("./controller/usuarioController")

const ReciclagemController = require("./controller/reciclagemController");

const PremioController = require("./controller/premioController")

const uri = "mongodb+srv://Leonardo:tesT123.2@cluster0.kcan61g.mongodb.net/trabalho?retryWrites=true&w=majority";





mongoose.connect(uri).then(async(conn) => {
    //Usuario

    //const create = await UsuarioController.criar("Roberto", "24681",120,12321.12,123123.23)
    //console.log(create);

    //const update = await UsuarioController.update("64235a16543d773bd6a818fc","Jorge")
    //console.log(update);

    //const read=await UsuarioController.read("64235a16543d773bd6a818fc")
    //console.log(read)

    //const deletar=await UsuarioController.deletar("641f47bfefb442ab64bc599c")
    //console.log(deletar)


    //const readAny=await UsuarioController.readAny();
    //console.log(readAny)


    //Reciclagem

    //const createR = await ReciclagemController.criar("Papel","Paper.png",12,new Date(),1,"64235a16543d773bd6a818fc")
    //console.log(createR);

    //const updateR = await ReciclagemController.update("64236981271cf47c43a5cc16","Papel A4")
    //console.log(updateR);

    //const readR=await ReciclagemController.read("64235e2cbfcab04519fd91eb")
    //console.log(read)

    //const deletarR=await ReciclagemController.deletar("64235e2cbfcab04519fd91eb")
    //console.log(deletarR)

    //const readAny=await ReciclagemController.readAny()
    //console.log(readAny)


    //Premio

    //const createP = await PremioController.criar("Coleta de madeira",12,500)
    //console.log(createP);

    //const updateP = await PremioController.update("64236841d193208184689ae3","Coleta de papel")
    //console.log(updateP);

    //const readP=await PremioController.read("64236841d193208184689ae3")
    //console.log(readP)

    //const deletarP=await PremioController.deletar("64236b4da221e4204620e9c7")
    //console.log(deletarP)

    //const readAny=await PremioController.readAny();
    //console.log(readAny)

})