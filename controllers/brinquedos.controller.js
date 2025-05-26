const mysql = require('../mysql');

exports.cadastroBrinquedo = async (req, res) => {
    try {
        const resultado = await mysql.execute(
            `insert into rides (name, waiting_time, status, area) values (?, ?, ?, ?, ?, ?)`,
            [req.body.name, req.body.waiting_time, req.body.status, req.body.area]
        );
        return res.status(201).send({ "Mensagem": "Brinquedo cadastrado com sucesso!", "Resultado": resultado });
    } catch (error) {
        return res.status(500).send(error)
    }
}