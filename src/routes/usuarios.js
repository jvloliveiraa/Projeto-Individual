var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarPontos", function (req, res) {
    usuarioController.cadastrarPontos(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/alterar_senha", function (req, res) {
    usuarioController.alterar_senha(req, res);
});

router.get("/atualizarTudo/:idUsuario", function (req, res) {
    usuarioController.atualizarTudo(req, res);
});

router.get("/recuperarID/", function (req, res) {
    usuarioController.recuperarID(req, res);
});

router.get("/amador/", function (req, res) {
    usuarioController.obterAmador(req, res);
});

router.get("/mediano/", function (req, res) {
    usuarioController.obterMediano(req, res);
});

router.get("/veterano/", function (req, res) {
    usuarioController.obterVeterano(req, res);
});

module.exports = router;