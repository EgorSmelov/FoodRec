import express from 'express';
import { Dish } from '../../../db/models';

const apiPagesRouter = express.Router();

apiPagesRouter.get('/:indexPage', async (req, res) => {
  const { indexPage } = req.params;
  const dishes = await Dish.findAll({ offset: indexPage, limit: 9 });

  //   const dishes = await Dish.findAll({ offset, limit: 9 });
  //   const test = await User.findAll({
  //     where: { id: res.locals.user.id },
  //     include:
  //     [{ model: Dish }],
  //   });

  //   const likesId = test[0].Dishes.map((el) => el.id);

  res.json({ dishes });
});

export default apiPagesRouter;
