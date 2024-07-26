const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (app) => {
  app.post('/criarUser', async (req, res) => {
    const { email, user, senha } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(senha, 10);
      const newUser = await User.create({
        Email: email,
        Username: user,
        PasswordHash: hashedPassword
      });
      res.json({
        message: 'Usuário criado com sucesso',
        userId: newUser.idUser
      });
    } catch (error) {
      console.error('Erro interno do servidor:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });

  app.post('/emails', async (req, res) => {
    try {
      const users = await User.findAll({ attributes: ['Email'] });
      const emails = users.map(user => user.Email);
      res.json(emails);
    } catch (error) {
      console.error('Erro ao buscar emails:', error);
      res.status(500).json({ error: 'Erro ao buscar emails' });
    }
  });

  app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
      const user = await User.findOne({ where: { Email: email } });
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      const passwordMatch = await bcrypt.compare(senha, user.PasswordHash);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const token = jwt.sign(
        { email: user.Email, id: user.idUser },
        process.env.JWT_SECRET || 'secreto',
        { expiresIn: '1h' }
      );

      res.status(200).json({ message: 'Login bem-sucedido', token, userId: user.idUser });
    } catch (error) {
      console.error('Erro interno do servidor durante o login:', error);
      res.status(500).json({ error: 'Erro interno do servidor durante o login' });
    }
  });
};
