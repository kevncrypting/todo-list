'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('TodoListItems', {
        todoListId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'TodoLists',
            key: 'id',
          },
        },
        todoItemId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'TodoItems',
            key: 'id',
          },
        },
     });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('TodoListItems');
  },
};
