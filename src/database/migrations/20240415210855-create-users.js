'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name:{
      type: Sequelize.STRING,
      allowNull: false
    },
    user_name:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    avatar:{
      type: Sequelize.STRING,
      allowNull: false
    },
    bio:{
      type: Sequelize.STRING,
      allowNull: false
    },
    gender:{
      type: Sequelize.STRING,
      allowNull: false
    },
    password_hash:{
      type: Sequelize.STRING,
      allowNull: false
    },
    created_at:{
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at:{
      type: Sequelize.DATE,
      allowNull: false
    }
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
