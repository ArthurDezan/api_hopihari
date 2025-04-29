const mysql2 = require('mysql2')

const pool = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'hopihari_db'
})

xports.execute = (query, params = [], pool = pool) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (err, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
            resolve(result)
        })
    })
}