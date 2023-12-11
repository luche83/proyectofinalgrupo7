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
        name: 'Tomas',
        surname: 'Reyes',
        email: 'tomasreyes2107@gmail.com',
        password: "$2a$10$Zy46bsBmLqfKRTXhHy1rX.T2D0hnGy3fFU7tGueMhxMLa7toGiNl.",
        roleId: 1,
        birthday: null,
       address: null,
       city: null,
       province: null,
       createdAt : new Date,
       updatedAt : new Date,
       },
       {
        name: 'admin',
        surname: 'visita',
        email: 'admin@gmail.com',
        password: "$2a$10$OET18k7cwGyn6tLxRm3cf.ozN0B7Mv5FN18QnWynyhIE9vd7YAdIm",
        roleId: 1,
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
