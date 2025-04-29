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
app.use('/usuarios', usuariosRoute);

module.exports = app;