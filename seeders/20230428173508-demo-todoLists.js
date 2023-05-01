'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TodoLists', [
      {
        name: 'Home',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'School',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Work',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Home',
        userId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'School',
        userId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Work',
        userId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Home',
        userId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'School',
        userId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Work',
        userId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TodoLists', null, {});
  }
};
