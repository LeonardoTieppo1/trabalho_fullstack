const express = require("express")
const bodyParser = require("body-parser")
const PremioController = require("../controller/usuarioController")
const { body, validationResult, matchedData } = require("express-validator")
const router = express.Router()

router.use(bodyParser.json())

router.post('/premio',
    body('descrição').isString().withMessage("Username inválido"),
    body('pontos').isString().withMessage("A senha deve ter menos de 6 caracteres"),
    body('quantidade').isNumeric().withMessage("Pontos são apenas números"),
    async(req, res) => {
        console.log(matchedData(req));
        const validacao = validationResult(req).array();
        if (validacao.length === 0) {
            const novo = await PremioController.criar(req.body.descricao, req.body.pontos, req.body.quantidade);
            res.json({ resultado: 'Premio criado!', premio: novo });
        } else {
            res.status(401).json(validacao);
        }
    })

router.put('/premio/novadesc/:id', async(req, res) => {
    const atualizar = await PremioController.update(req.params.id, req.body.novaDesc)
    if (atualizar) {
        res.json({ resultado: 'Descrição alterada com sucesso!' });
    } else res.status(400).json({ resultado: 'Problemas para alterar a descrição' });
})

router.get('/premio/:id', async(req, res) => {
    const consulta = await PremioController.read(req.params.id)
    if (consulta) {
        res.json({ resultado: 'Consulta realizada com sucesso!' });
    } else res.status(400).json({ resultado: 'Premio não identificado' });
})

router.get('/premios', async(req, res) => {
    const todos = await PremioController.readAny()
    res.json(todos)
    res.status(400).json({ resultado: 'Sem premios' });
})



router.put('/premio/deletar/:id', async(req, res) => {
    const deletar = await PremioController.deletar(req.params.id)
    if (deletar) {
        res.json({ resultado: 'Premio deletado!' });
    } else res.status(400).json({ resultado: 'Premio não identificado' });
})

module.exports = router;