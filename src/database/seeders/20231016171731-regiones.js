'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Regions', 
     
     [
      {
       title: 'Norte Grande Argentino',
       image: null,
       createdAt : new Date,
       updatedAt : new Date,
       
      },
      {
        title: 'Centro',
        image: null,
        createdAt : new Date,
        updatedAt : new Date,
        
       },
       {
        title: 'Nuevo Cuyo',
         image: null,
         createdAt : new Date,
         updatedAt : new Date,
         
        },
        {
          title: 'Patagonia',
          image: null,
          createdAt : new Date,
          updatedAt : new Date,
          
         },
         {
          title: 'Litoral',
           image: null,
           createdAt : new Date,
           updatedAt : new Date,
           
          },
          {
            title: 'Buenos Aires',
            image: null,
            createdAt : new Date,
            updatedAt : new Date,
            
           },
           {
            title: 'Costa Atlantica',
             image: null,
             createdAt : new Date,
             updatedAt : new Date,
             
            }
        
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Regions', null, {});
     
  }
};
