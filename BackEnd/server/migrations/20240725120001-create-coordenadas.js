module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coordenadas', {
      IdCoord: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Latitude: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false
      },
      Longitude: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: false
      },
      EsportesPraticados: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Coordenadas');
  }
};
