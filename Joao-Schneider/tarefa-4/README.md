Tarefa 4 - API REST com Node.js (Express)

Esta tarefa consiste na criação de uma API REST simples utilizando Node.js, tendo escolhido Express, com o objetivo de entender o funcionamento básico de uma API, criação de rotas e uso correto dos verbos HTTP.

Entidade: Usuários

Foram implementas as seguintes rotas:

- GET /users (Lista todos os usuários)
- GET /users/:id (Busca um usuário pelo ID)
- POST /users — (Cria um novo usuário)
- PUT /users/:id — (Atualiza um usuário existente)
- DELETE /users/:id — (Remove um usuário)

Os dados são armazenados em memória (array), sem uso de banco de dados.

👉 Os testes para POST, PUT e DELETE foram feitos usando a extensão https://reqbin.com/

Exemplo funcional do PUT:

![alt text](<Captura de tela 2026-01-30 105716.png>)

exibido:
![alt text](<Captura de tela 2026-01-30 105721.png>)
