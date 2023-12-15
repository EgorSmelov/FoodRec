import express from 'express';
import { Dish } from '../../../db/models';

const apiSortRouter = express.Router();

apiSortRouter.get('/:NameType', async (req, res) => {
  try {
    const typeSort = req.params.NameType;
    let sortDishes;

    switch (typeSort) {
      case 'timeAsc':
        sortDishes = await Dish.findAll({
          order: [
            ['time', 'ASC']],
        });
        break;

      case 'timeDesc':
        sortDishes = await Dish.findAll({
          order: [
            ['time', 'DESC']],
        });
        break;

      case 'ingridientsAsc':
        const dataAsc = await Dish.findAll();
        sortDishes = dataAsc.sort((a, b) => a.ingredients.split(',').length - b.ingredients.split(',').length);
        break;

      case 'ingridientsDesc':
        const dataDesc = await Dish.findAll();
        sortDishes = dataDesc.sort((a, b) => b.ingredients.split(',').length - a.ingredients.split(',').length);
        break;

      default:
        '';
    }

    res.status(200).json(sortDishes);
  } catch (error) {
    res.status(400);
  }
});

export default apiSortRouter;
