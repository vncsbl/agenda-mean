var express = require('express');
var router = express.Router();
var ctrlContatos = require('../controllers/contatos');


router.get('/contatos', ctrlContatos.buscaTodos);
router.post('/contatos', ctrlContatos.salva);
router.put('/contatos', ctrlContatos.edita);
router.delete('/contatos/:id', ctrlContatos.remove);
module.exports = router;