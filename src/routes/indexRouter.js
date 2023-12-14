import express from 'express';
import { Dish } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const dishes = await Dish.findAll();
  console.log(dishes);
  res.render('IndexPage', { dishes });
});

export default indexRouter;
