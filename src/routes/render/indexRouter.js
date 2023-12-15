import express from 'express';
import { Dish, User } from '../../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const dishes = await Dish.findAll();

  let likesId;
  if (res.locals.user) {
    const test = await User.findAll({
      where: { id: res.locals.user.id },
      include:
    [{ model: Dish }],
    });
    likesId = test[0].Dishes.map((el) => el.id);
  } else {
    likesId = [];
  }

  res.render('IndexPage', { dishes, likesId });
});

export default indexRouter;
