module.exports = {
  async up(queryInterface, Sequelize) {
    const fetch = require('node-fetch');

    const dishArr = [];

    for (let i = 0; i < 20; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php/${randomNumber}`);
      const data = await response.json();

      const ingredients = [];
      const randomTimeMin = Math.floor(Math.random() * (120 - 10 + 1) + 10);
      for (let j = 1; j <= 20; j++) {
        const ingredient = data.meals[0][`strIngredient${j}`];
        if (ingredient) {
          ingredients.push(ingredient);
        }
      }
      const objDish = {
        name: data.meals[0].strMeal,
        img: data.meals[0].strMealThumb,
        ingredients: ingredients.join(', '),
<<<<<<< HEAD
        instruction: data.meals[0].strInstructions,
        time: randomTimeMin,

>>>>>>> 7a058a7
      };
      dishArr.push(objDish);
    }

    await queryInterface.bulkInsert('Dishes', dishArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dishes', null, {});
  },
};
