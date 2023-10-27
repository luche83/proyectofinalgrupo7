'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Images', 
     
     [
      {
        file: 'poncho.jpg',
        main: 1,
        productId: 1,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
        file: 'bombilla.webp',
        main: 1,
        productId: 2,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
        file: 'cinto.webp',
        main: 1,
        productId: 3,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
        file: 'mate.webp',
        main: 1,
        productId: 4,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
        file: 'alpagata.webp',
        main: 1,
        productId: 5,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
        file: 'cuchillo.webp',
        main: 1,
        productId: 6,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
        file: 'termo.webp',
        main: 1,
        productId: 7,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
        file: 'destapador.webp',
        main: 1,
        productId: 8,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
        file: 'portatermo.jpg',
        main: 1,
        productId: 9,
        createdAt : new Date,
        updatedAt : new Date,
       
      },
      {
        file: 'billetera.webp',
        main: 1,
        productId: 10,
        createdAt : new Date,
        updatedAt : new Date,
       
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Images', null, {});
     
  }
};