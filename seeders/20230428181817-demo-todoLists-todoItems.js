'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TodoListItems', [
      { todoListId: 1, todoItemId: 1 }, 
      { todoListId: 1, todoItemId: 2 }, 
      { todoListId: 1, todoItemId: 3 }, 
      { todoListId: 2, todoItemId: 4 }, 
      { todoListId: 2, todoItemId: 5 }, 
      { todoListId: 2, todoItemId: 6 }, 
      { todoListId: 3, todoItemId: 7 }, 
      { todoListId: 3, todoItemId: 8 }, 
      { todoListId: 3, todoItemId: 9 }, 
      { todoListId: 4, todoItemId: 10 }, 
      { todoListId: 4, todoItemId: 11 }, 
      { todoListId: 4, todoItemId: 12 }, 
      { todoListId: 5, todoItemId: 13 }, 
      { todoListId: 5, todoItemId: 14 }, 
      { todoListId: 5, todoItemId: 15 }, 
      { todoListId: 6, todoItemId: 16 }, 
      { todoListId: 6, todoItemId: 17 }, 
      { todoListId: 6, todoItemId: 18 }, 
      { todoListId: 7, todoItemId: 19 }, 
      { todoListId: 7, todoItemId: 20 }, 
      { todoListId: 7, todoItemId: 21 }, 
      { todoListId: 8, todoItemId: 22 }, 
      { todoListId: 8, todoItemId: 23 }, 
      { todoListId: 8, todoItemId: 24 }, 
      { todoListId: 9, todoItemId: 25 }, 
      { todoListId: 9, todoItemId: 26 }, 
      { todoListId: 9, todoItemId: 27 }, 
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TodoListItems', null, {});
  },
};
