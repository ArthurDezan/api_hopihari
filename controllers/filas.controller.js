const mysql = require('../mysql');

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