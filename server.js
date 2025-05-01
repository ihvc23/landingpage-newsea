const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contato', (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;
  console.log('Nova mensagem recebida:', { nome, email, telefone, mensagem });
  res.setHeader('Content-Type', 'application/json');
  res.json({ mensagem: 'Mensagem enviada com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});
