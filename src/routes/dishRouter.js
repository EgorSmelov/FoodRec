import express from 'express';

const dishRouter = express.Router();

dishRouter.get('/dishes/:id', async (req, res) => {
  const { id } = req.params;
  const oneDish = await Dish.findOne({ where: { id } });
  res.render('DishPage', { dish: oneDish });
});

export default dishRouter;
