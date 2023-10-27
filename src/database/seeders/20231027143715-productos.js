'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Products', 
     
     [
      {
       
        title: 'Poncho',
        price: 1500,
        discount: 5,
        amount: 250,
        amountmin: 15,
        description: 'Elaborado con lana de conejo patagonico',
        categoryId: 1,
        sectionId: 3,
        regionId: 7,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
       
        title: 'Bombilla',
        price: 1000,
        discount: 10,
        amount: 2500,
        amountmin: 15,
        description: 'Elaborado con Plata 900',
        categoryId: 2,
        sectionId: 2,
        regionId: 5,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
       
        title: 'Cinturon',
        price: 2000,
        discount: 10,
        amount: 2500,
        amountmin: 15,
        description: 'Elaborado con cuero natural',
        categoryId: 3,
        sectionId: 1,
        regionId: 2,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
       
        title: 'Mate Forrado',
        price: 2500,
        discount: 0,
        amount: 2500,
        amountmin: 20,
        description: 'Elaborado con cuero natural',
        categoryId: 1,
        sectionId: 2,
        regionId: 3,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
       
        title: 'Alpargata',
        price: 3500,
        discount: 15,
        amount: 500,
        amountmin: 20,
        description: 'Elaborado con cuero natural',
        categoryId: 2,
        sectionId: 2,
        regionId: 3,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
       
        title: 'Cuchillo',
        price: 1500,
        discount: 5,
        amount: 250,
        amountmin: 15,
        description: 'Elaborado con acero fino',
        categoryId: 3,
        sectionId: 2,
        regionId: 4,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
       
        title: 'Termo',
        price: 1000,
        discount: 10,
        amount: 2500,
        amountmin: 15,
        description: 'Elaborado con productos de priimera calidad',
        categoryId: 1,
        sectionId: 2,
        regionId: 2,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
       
        title: 'Destapador',
        price: 1500,
        discount: 10,
        amount: 2500,
        amountmin: 15,
        description: 'Elaborado con palo santo',
        categoryId: 2,
        sectionId: 3,
        regionId: 6,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
       
        title: 'Porta termo',
        price: 2500,
        discount: 0,
        amount: 2500,
        amountmin: 20,
        description: 'Elaborado con cuero natural',
        categoryId: 3,
        sectionId: 2,
        regionId: 3,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
       
        title: 'Billetera',
        price: 4000,
        discount: 15,
        amount: 500,
        amountmin: 20,
        description: 'Elaborado con cuero natural',
        categoryId: 2,
        sectionId: 1,
        regionId: 3,
        createdAt : new Date,
        updatedAt : new Date,
       
      }
      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};