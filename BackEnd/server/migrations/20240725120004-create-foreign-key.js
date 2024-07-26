module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addConstraint('Coordenadas', {
        fields: ['user_id'],
        type: 'foreign key',
        name: 'fk_coordenadas_users',
        references: {
          table: 'Users',
          field: 'idUser'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
  
      await queryInterface.addConstraint('Users', {
        fields: ['LocaisFavoritosIdCoord'],
        type: 'foreign key',
        name: 'fk_users_coordenadas',
        references: {
          table: 'Coordenadas',
          field: 'IdCoord'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.removeConstraint('Coordenadas', 'fk_coordenadas_users');
      await queryInterface.removeConstraint('Users', 'fk_users_coordenadas');
    }
  };
  