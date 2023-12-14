import express from 'express';
import { Dish, User } from '../../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const dishes = await Dish.findAll();

  const test = await User.findAll({
    where: { id: res.locals.user.id },
    include:
    [{ model: Dish }],
  });

  const likesId = test[0].Dishes.map((el) => el.id);

  res.render('IndexPage', { dishes, likesId });
});

export default indexRouter;
