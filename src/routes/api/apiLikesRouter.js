import express from 'express';
import { Like } from '../../../db/models';

const apiLikesRouter = express.Router();

apiLikesRouter.route('/:userId/:dishId')
  .post(async (req, res) => {
    try {
      const { userId, dishId } = req.params;
      await Like.create({ userId, dishesId: dishId });
      res.sendStatus(200);
    } catch (error) {
      res.status(400);
    }
  })
  .delete(async (req, res) => {
    try {
      const { userId, dishId } = req.params;
      await Like.destroy({ where: { userId, dishesId: dishId } });
      res.sendStatus(200);
    } catch (error) {
      res.status(400);
    }
  });

export default apiLikesRouter;
