'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Sections', 
     
     [
      {
       title: 'Vestimenta',
       image: null,
       createdAt : new Date,
       updatedAt : new Date,
       
      },
      {
        title: 'Artesanales',
        image: null,
        createdAt : new Date,
        updatedAt : new Date,
        
       },
       {
         title: 'Regionales',
         image: null,
         createdAt : new Date,
         updatedAt : new Date,
         
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Sections', null, {});
     
  }
};
