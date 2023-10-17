'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Regions', 
     
     [
      {
       name: 'Norte Grande Argentino',
       image: null,
       createdAt : new Date,
       updatedAt : new Date,
       
      },
      {
        name: 'Centro',
        image: null,
        createdAt : new Date,
        updatedAt : new Date,
        
       },
       {
         name: 'Nuevo Cuyo',
         image: null,
         createdAt : new Date,
         updatedAt : new Date,
         
        },
        {
          name: 'Patagonia',
          image: null,
          createdAt : new Date,
          updatedAt : new Date,
          
         },
         {
           name: 'Litoral',
           image: null,
           createdAt : new Date,
           updatedAt : new Date,
           
          },
          {
            name: 'Buenos Aires',
            image: null,
            createdAt : new Date,
            updatedAt : new Date,
            
           },
           {
             name: 'Costa Atlantica',
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
