'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Categories', 
     
     [
      {
       title: 'Nuevos',
       image: null,
       createdAt : new Date,
       updatedAt : new Date,
       
      },
      {
        title: 'Ofertas',
        image: null,
        createdAt : new Date,
        updatedAt : new Date,
        
       },
       {
         title: 'Mas Visitadas',
         image: null,
         createdAt : new Date,
         updatedAt : new Date,
         
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
