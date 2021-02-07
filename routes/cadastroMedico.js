var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('cadastroMedico', {title: 'Cadastro Médico'});
});

module.exports = router;

