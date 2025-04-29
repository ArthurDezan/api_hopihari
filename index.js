const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const usuariosRoute = require('./routes/usuarios.route');

app.use(helmet());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    }
    next();
})

let usuarios = [];

// Rota para cadastro de usuário
app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ mensagem: 'Nome e email são obrigatórios.' });
    }
    const novoUsuario = { id: usuarios.length + 1, nome, email };
    usuarios.push(novoUsuario);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', usuario: novoUsuario });
});

// Rota para atualizar usuário
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    const usuario = usuarios.find(u => u.id === parseInt(id));
    if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;

    res.status(200).json({ mensagem: 'Usuário atualizado com sucesso!', usuario });
});

app.use('/usuarios', usuariosRoute);

module.exports = app;