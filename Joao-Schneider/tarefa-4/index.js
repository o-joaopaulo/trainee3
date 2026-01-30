const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1, nome: 'Joãozinho' },
  { id: 2, nome: 'Paulinho' },
  { id: 3, nome: 'Schneiderzinho'}
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  res.json(user);
});

app.post('/users', (req, res) => {
  const { nome } = req.body;

  const novoUsuario = {
    id: users.length + 1,
    nome
  };

  users.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

app.put('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const { nome } = req.body;

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  user.nome = nome;

  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);

  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

