import { TodoList } from '../../db/models';

const checkAuthor = async (req, res, next) => {
  const { id } = req.params;
  const track = await Dish.findOne({ where: { id, userId: res.locals.user.id } });
  if (!track) return res.sendStatus(403);
  return next();
};

export default checkAuthor;
