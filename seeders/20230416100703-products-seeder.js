'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
        {
          description: 'A small maki with a butterfish core wrapped in rice and nori seaweed, for those who love a particularly magical flavor',
          name_product: 'Butter Maki',
          price_product: 0.80,
          CategoryId: 1,
          img: "maki-butter.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "The great classic, the one that can't go wrong, everyone would eat a maki with a salmon core wrapped in rice and nori seaweed, for lovers of the original.",
          name_product: 'Classic Maki',
          price_product: 0.60,
          CategoryId: 1,
          img: "maki-classic.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "If you're one of those who likes everything and doesn't want to miss out on anything, the maki with tuna, butterfish, avocado, and mango core is for you. ",
          name_product: 'Four Maki',
          price_product: 0.90,
          CategoryId: 1,
          img: "maki-four.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "If you want to explore the galaxy, this is your choice: a maki filled with mango, avocado, tuna, and Philadelphia cream cheese, wrapped in a salmon blanket.",
          name_product: 'Salmon Maki',
          price_product: 1,
          CategoryId: 1,
          img: "maki-salmon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Salmon nigiri is a traditional Japanese sushi dish that consists of a small hand-formed ball of seasoned sushi rice topped with a slice of fresh, raw salmon.",
          name_product: 'Salmon Nigiri',
          price_product: 1.2,
          CategoryId: 4,
          img: "nigiri-salmon.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Tuna nigiri is a classic Japanese sushi dish made with a small hand-formed ball of sushi rice topped with a slice of fresh, raw tuna.",
          name_product: 'Tuna Nigiri',
          price_product: 1.2,
          CategoryId: 4,
          img: "nigiri-tuna.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Octopus nigiri is a type of Japanese sushi that consists of a small ball of sushi rice topped with a slice of cooked octopus.",
          name_product: 'Octopus Nigiri',
          price_product: 1.4,
          CategoryId: 4,
          img: "nigiri-octopus.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Prawn nigiri is a type of sushi that consists of a piece of raw, peeled and deveined prawn placed on top of a small ball of seasoned sushi rice.",
          name_product: 'Prawn Nigiri',
          price_product: 1.2,
          CategoryId: 4,
          img: "nigiri-gamb.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Sushi rice, sliced avocado, and cooked egg rolled in nori seaweed, then rolled again in a layer of toasted sesame seeds or tobiko for added texture and flavor. ",
          name_product: 'Advo Uramaki',
          price_product: 0.8,
          CategoryId: 2,
          img: "uramaki-advo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: " Sushi rice and a filling of various ingredients such as cucumber, crab, or avocado, rolled in nori seaweed and then rolled again in a layer of tobiko.  ",
          name_product: 'Tobiko Uramaki',
          price_product: 1.4,
          CategoryId: 2,
          img: "uramaki-egg.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: " Rolling seasoned sushi rice, spicy tuna, sliced avocado, and cucumber in nori seaweed, then rolling it again in a layer of toasted sesame seeds or tobiko. ",
          name_product: 'Souce Uramaki',
          price_product: 1.2,
          CategoryId: 2,
          img: "uramaki-souce.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: "Is a type of sushi that consists of small, oval-shaped sushi rice balls that are wrapped with a strip of nori seaweed and topped with tobiko (flying fish roe).  ",
          name_product: 'Tobiko Gunkan',
          price_product: 2,
          CategoryId: 3,
          img: "uramaki-egg.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
