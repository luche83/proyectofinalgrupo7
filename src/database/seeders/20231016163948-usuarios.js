'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Users', 
     [
      {
       name: 'Jorge',
       surname: 'Lesme',
       email: 'manidelabk031@gmail.com',
       password: "$2a$10$OET18k7cwGyn6tLxRm3cf.ozN0B7Mv5FN18QnWynyhIE9vd7YAdIm",
       roleId: 1,
       birthday: "1981-09-10",
      address: "Lío Zanganeando 2495",
      city: "Hurlinghan",
      province: "Buenos Aires",
      createdAt : new Date,
       updatedAt : new Date,
             },
      {
        name: 'Julio',
        surname: 'Benedigno',
        email: 'juliobenedigno@gmail.com',
        password: "$2a$10$QJ3bfiUyjbwsHtWssuhNIu005Jo9f1aFuf6t.qOrRVvTt0AKfNXw2",
        roleId: 2,
        birthday: null,
       address: null,
       city: null,
       province: null,
       createdAt : new Date,
       updatedAt : new Date,
       }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
