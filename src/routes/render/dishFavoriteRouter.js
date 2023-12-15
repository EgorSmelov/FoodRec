import express from 'express';
import { verifyAccessToken } from '../../middlewares/verifyTokens';
import { Dish, User } from '../../../db/models';

const dishFavoriteRouter = express.Router();

dishFavoriteRouter.get('/', verifyAccessToken, async (req, res) => {
  try {
    const dishes = await Dish.findAll({
      include: [{
        model: User,
        where: { id: res.locals.user.id },
      }],
    });

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
    res.render('FavoritePage', { dishes, likesId });
  } catch (error) {
    res.status(500);
  }
});

export default dishFavoriteRouter;
