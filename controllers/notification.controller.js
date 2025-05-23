const mysql = require('../mysql');

exports.getNotification = async (req, res) => {
    try{
        const resultado = await mysql.execute(
            `select * from notification where Notification_id = ? and Status = true;`,
            [res.locals.idUsuario]
        );
        return res.status(200).send({ "Mensagem": "Notificações encontradas com sucesso!", "Resultado": resultado });
    }catch (error){
        return res.status(500).send({'error': error});
    }
}

exports.putNotification = async (req, res) => {
    try {
        const resultado = await mysql.execute(
            `update notification set Status = false where Notification_id = ?;`,
            [req.params.idNotification]
        );
        if (resultado.affectedRows == 0) {
            return res.status(404).send({ "Mensagem": "Notificação não encontrada" });
        }
        return res.status(200).send({ "Mensagem": "Notificações atualizadas com sucesso!", "Resultado": resultado });
    } catch (error) {
        return res.status(500).send({'error': error});
    }
}