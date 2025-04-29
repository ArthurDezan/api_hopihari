const mysql = require('../myslq');

exports.cadastrarUsuario = async (req, res) => {
    try {
        const resultado = await mysql.execute(
            `insert into users (name, email, password) values (?, ?, ?)`,
            [req.body.name, req.body.email, req.body.password]
        );
        return res.status(200).send({"Mensagem": "Usuário cadastrado com sucesso!", "Resultado": resultado});

    } catch (error) {
        return res.status(500).send({"Mensagem": error})
    }
}

exports.atualizarUsuario = async (req, res) => {
    try {
        const idUsuario = Number(req.params.id);
        const resultado = await mysql.execute(
            `update users
            set name = ?, 
	        email = ?,
            password = ?
            where id = ?;`,
            [req.body.name, req.body.email, req.body.password, idUsuario]
        );
        return res.status(201).send({"Mensagem": "Usuário atualizado com sucesso!", "Resultado": resultado});

    } catch (error) {
        return res.status(500).send({"Mensagem": error})
    }
}