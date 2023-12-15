import express from 'express';
import { Dish, User } from '../../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500);
  }
});

indexRouter.get('*', (req, res) => res.status(404).render('Error404Page'));

export default indexRouter;
