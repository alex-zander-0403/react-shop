"use strict";
const { Item } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Item.bulkCreate([
      {
        id: 1,
        title: "Кеды Lora Piana (черные)",
        img: "1",
        price: 12500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Палантин Louis Vuitton (бежевый)",
        img: "2",
        price: 5500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Лофферы Lora Piana (синие)",
        img: "3",
        price: 9500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "Brunello Cucinelli (зима)",
        img: "4",
        price: 18500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: "Кеды Lora Piana (черные)",
        img: "5",
        price: 12500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: "Жилет Prada",
        img: "6",
        price: 19000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        title: "Курточка Canada Goose (синяя)",
        img: "7",
        price: 22500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        title: "Шапка Lora Piana (бежевый)",
        img: "8",
        price: 4800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        title: "Худи Chrome Hearts",
        img: "9",
        price: 14000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        title: "Валенки",
        img: "10",
        price: 16300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
