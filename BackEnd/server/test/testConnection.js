const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'host',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
})();
