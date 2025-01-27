import express from 'express';
import { Dish, User } from '../../../db/models';

const apiSortRouter = express.Router();

apiSortRouter.get('/main/:sortType', async (req, res) => {
  try {
    const typeSort = req.params.sortType;
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

      case 'favourites':
        sortDishes = await Dish.findAll({
          include: [{
            model: User,
            where: { id: res.locals.user.id },
          }],
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
        sortDishes = await Dish.findAll({
          order: [
            ['id', 'ASC']],
        });
    }

    res.status(200).json(sortDishes);
  } catch (error) {
    res.status(400);
  }
});

apiSortRouter.get('/favorite/:sortType', async (req, res) => {
  try {
    const typeSort = req.params.sortType;
    let sortDishes;
    switch (typeSort) {
      case 'timeAsc':
        sortDishes = await Dish.findAll({
          order: [
            ['time', 'ASC']],
          include: [{
            model: User,
            where: { id: res.locals.user.id },
          }],
        });
        break;

      case 'timeDesc':
        sortDishes = await Dish.findAll({
          order: [
            ['time', 'DESC']],
          include: [{
            model: User,
            where: { id: res.locals.user.id },
          }],
        });
        break;

      case 'ingridientsAsc':
        const dataAsc = await Dish.findAll({
          include: [{
            model: User,
            where: { id: res.locals.user.id },
          }],
        });
        sortDishes = dataAsc.sort((a, b) => a.ingredients.split(',').length - b.ingredients.split(',').length);
        break;

      case 'ingridientDesc':
        const dataDesc = await Dish.findAll({
          include: [{
            model: User,
            where: { id: res.locals.user.id },
          }],
        });
        sortDishes = dataDesc.sort((a, b) => a.ingredients.split(',').length - b.ingredients.split(',').length);
        break;

      default:
        sortDishes = await Dish.findAll({
          order: [
            ['id', 'ASC']],
          include: [{
            model: User,
            where: { id: res.locals.user.id },
          }],
        });
    }

    res.status(200).json(sortDishes);
  } catch (error) {
    res.status(400);
  }
});

export default apiSortRouter;
