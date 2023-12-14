import express from 'express';
import { Like } from '../../../db/models';

const apiLikesRouter = express.Router();

apiLikesRouter.route('/:userId/:dishId')
  .post(async (req, res) => {
    const { userId, dishId } = req.params;
    await Like.create({ userId, dishesId: dishId });
    res.sendStatus(200);
  })
  .delete(async (req, res) => {
    const { userId, dishId } = req.params;
    await Like.destroy({ where: { userId, dishesId: dishId } });
    res.sendStatus(200);
  });

export default apiLikesRouter;
