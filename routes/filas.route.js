const express = require('express');
const router = express.Router();
const login = require('../middleware/usuarios.middleware');

router.post('/', login.required, ()=> {
    console.log('rota de fila')
    return
});

module.exports = router;