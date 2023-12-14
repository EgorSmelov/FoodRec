import express from 'express';
import sequelize from 'sequelize';
import { Dish } from '../../../db/models';

const apiSortRouter = express.Router();

apiSortRouter.get('/:NameType', async (req, res) => {
  try {
    const [name, typeSort] = req.params.NameType.split(',');
    if (name.includes('sortIngridients')) {
      const sortDishes = await Dish.findAll({
        order: [
          [sequelize.fn('length', sequelize.col('ingredients')), typeSort],
        ],
      });
      res.json(sortDishes);
    }

    const sortDishes = await Dish.findAll({
      order: [
        [name, typeSort]],
    });

    res.json(sortDishes);
  } catch (error) {
    res.status(400);
  }
});

export default apiSortRouter;
