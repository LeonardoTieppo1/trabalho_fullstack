const express = require("express")
const bodyParser = require("body-parser")
const ReciclagemController = require("../controller/usuarioController")
const { body, validationResult, matchedData } = require("express-validator")
const router = express.Router()

router.use(bodyParser.json())

router.post('/reciclagem',
    body('item').notEmpty().isString().withMessage("Item inválido"),
    body('imagem').isString().withMessage("A imagem é em string"),
    body('peso').isNumeric().withMessage("Pesos são apenas números"),
    body('data').isDate().withMessage("Data inválida"),
    async(req, res) => {
        console.log(matchedData(req));
        const validacao = validationResult(req).array();
        if (validacao.length === 0) {
            const novo = await ReciclagemController.criar(req.body.item, req.body.imagem);
            res.json({ resultado: 'Reciclagem criado!', reciclagem: novo });
        } else {
            res.status(401).json(validacao);
        }
    })

router.put('/reciclagem/novaimagem/:id', async(req, res) => {
    const atualizar = await ReciclagemController.update(req.params.id, req.body.novaImagem)
    if (atualizar) {
        res.json({ resultado: 'Imagem alterada com sucesso!' });
    } else res.status(400).json({ resultado: 'Problemas para alterar a imagem' });
})

router.get('/reciclagem/:id', async(req, res) => {
    const consulta = await ReciclagemController.read(req.params.id)
    if (consulta) {
        res.json({ resultado: 'Consulta realizada com sucesso!' });
    } else res.status(400).json({ resultado: 'O item não existe ou id incorreto' });
})

router.get('/reciclagens', async(req, res) => {
    const todos = await ReciclagemController.readAny()
    res.json(todos)
    res.status(400).json({ resultado: 'Reciclagem vázia' });
})



router.put('/reciclagem/deletar/:id', async(req, res) => {
    const deletar = await ReciclagemController.deletar(req.params.id)
    if (deletar) {
        res.json({ resultado: 'Item deletado!' });
    } else res.status(400).json({ resultado: 'Item não identificado' });
})

module.exports = router;