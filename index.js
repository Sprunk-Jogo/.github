// index.js
// Arquivo principal do Sprunki Incredibox Game

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
