import express from 'express';
import { Dish } from '../../db/models';

const router = express.Router();

router.get('/:NameType', async (req, res) => {
  const [name, typeSort] = req.params.NameType.split(',');
  const sortDishes = await Dish.findAll({
    order: [
      [name, typeSort]],
  });
  res.json(sortDishes);
});

router.get('/sortTimeZA', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/sortIngridientsAZ', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/sortIngridientsZA', (req, res) => {
  res.json({ hello: 'world' });
});

export default router;
