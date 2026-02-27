require('dotenv').config();
const express = require('express');
const userService = require('./services/userService');

const app = express();
app.use(express.json());

const config = require('./config');
console.log(`Running in ${config.env} environment`);

app.get('/users', async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await userService.createUser(name, email);
  res.json(user);
});

app.put('/users/:id', async (req, res) => {
  const { name, email } = req.body;
  const user = await userService.updateUser(req.params.id, name, email);
  res.json(user);
});

app.delete('/users/:id', async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'User deleted' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});