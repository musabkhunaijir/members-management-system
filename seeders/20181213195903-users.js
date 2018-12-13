const sha1 = require('sha1')

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        name: 'a',
        role_id: 1,
        password: sha1(123),
        phone: '123456789',
        email: 'a@a.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'i',
        role_id: 2,
        password: sha1(123),
        phone: '123456789',
        email: 'b@b.com',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};