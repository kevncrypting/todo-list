'use strict';

const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Test User 1',
        password: bcrypt.hashSync('password123', 10),
        email: 'testuser1@testing.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Test User 2',
        password: bcrypt.hashSync('password456', 10),
        email: 'testuser2@testing.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Test User 3',
        password: bcrypt.hashSync('password789', 10),
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
