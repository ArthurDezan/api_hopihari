const http = require('http');
const app = require('./index');

const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Server rodando na porta 3000');
})