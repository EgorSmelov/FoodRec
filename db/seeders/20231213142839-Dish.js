/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    async function getData() {
      const randomNumber = Math.floor(Math.random() * 100);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php/${randomNumber}`).then((data) => data.json());
      return response;
    }
    // function gatherIngredients(meal) {
    //   const ingredients = [];
    //   for (let i = 1; i <= 20; i++) {
    //     const ingredient = meal[`strIngredient${i}`];
    //     if (ingredient) {
    //       ingredients.push(ingredient);
    //     }
    //   }
    //   return ingredients;
    // }

    // const ingredientsArr = gatherIngredients(data.meals[0]);

    const dishArr = [];
    for (let i = 0; i < 20; i++) {
      const data = await getData();
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
        instruction: data.meals[0].strInstructions,
        time: randomTimeMin,
      };
      dishArr.push(objDish);
    }

    // const arrayDish = [];
    // for (let i = 0; i < 20; i++) {
    //   const obj = {
    //     name: data.meals[0].strMeal,
    //     img: data.meals[0].strMealThumb,
    //     ingredients: ingredientsArr.join(', '),
    //     instruction: data.meals[0].strInstructions,
    //     time: randomNumber,
    //   };
    //   arrayDish.push(obj);
    // }
    await queryInterface.bulkInsert('Dishes', dishArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dishes', null, {});
  },
};
