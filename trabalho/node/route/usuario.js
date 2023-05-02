const express = require("express")
const bodyParser = require("body-parser")
const UsuarioController = require("../controller/usuarioController")
const { body, validationResult, matchedData } = require("express-validator")
const router = express.Router()

router.use(bodyParser.json())

router.post('/usuario',
    body('nome').notEmpty().isString().withMessage("Username inválido"),
    body('senha').isNumeric().isLength({ max: 6 }).withMessage("A senha deve ter menos de 6 caracteres"),
    body('pontos').isNumeric().withMessage("Pontos são apenas números"),
    body('latitude').isNumeric().withMessage("Latitude são apenas números"),
    body('longitude').isNumeric().withMessage("Longitude são apenas números"),
    async(req, res) => {
        console.log(matchedData(req));
        const validacao = validationResult(req).array();
        if (validacao.length === 0) {
            const novo = await UsuarioController.criar(req.body.nome, req.body.senha);
            res.json({ resultado: 'Usuário criado!', usuario: novo });
        } else {
            res.status(401).json(validacao);
        }
    })

router.post('/usuario/login/', (req, res) => {
    const login = UsuarioController.login(req.body.username, req.body.senha);
    if (login.valido) {
        res.json(login);
    } else res.status(401).json(login);
});
module.exports = router;