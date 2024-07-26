module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      idUser: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      Username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PasswordHash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      LocaisFavoritosIdCoord: {
        type: Sequelize.INTEGER,
        // Remover a referência temporariamente
      },
      HistoricoUsuario: {
        type: Sequelize.STRING(1000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
