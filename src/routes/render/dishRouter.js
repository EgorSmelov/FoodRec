import express from 'express';
import { Dish } from '../../../db/models';

const dishRouter = express.Router();

dishRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneDish = await Dish.findOne({ where: { id } });
    res.render('DishPage', { oneDish });
  } catch (error) {
    res.status(500);
  }
});

export default dishRouter;
