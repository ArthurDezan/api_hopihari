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