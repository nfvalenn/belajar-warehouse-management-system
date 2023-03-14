'use strict';

const { STRING } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('outbound', { 
      id: {
        type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
      },
      products: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      building: {
        type: Sequelize.STRING,
        allowNull: false
      },
      room: {
        type: Sequelize.STRING,
        allowNull: false
      },
      floor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      area: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rack: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rack_level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('outbound');
  }
};
