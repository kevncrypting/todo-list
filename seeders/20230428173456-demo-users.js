'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Test User 1',
        password: 'password123',
        email: 'testuser1@testing.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Test User 2',
        password: 'password456',
        email: 'testuser2@testing.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Test User 3',
        password: 'password789',
        email: 'testuser3@testing.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
