const mysql = require('../mysql');

exports.verificarBrinquedo = async (req, res) => {
    try {
        const resultado = await mysql.execute(`select * from rides where id = ?`, [req.params.idRide]);
        if (resultado.length == 0) {
            return res.status(404).send({ "Mensagem": "Brinquedo não encontrado" });
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.entrarfila = async (req, res, next) => {
    try {
        const resultado = await mysql.execute(
            `insert into lines (users_id, atracoes_id) values (?, ?)`,
            [res.locals.idUsuario, req.params.idRide]);

        return res.status(201).send({ "Mensagem": "Usuário entrou na fila com sucesso!", "Resultado": resultado });

    } catch (error) {
        return res.status(500).send(error)
    }
}