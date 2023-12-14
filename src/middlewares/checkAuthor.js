import { TodoList } from '../../db/models';

const checkAuthor = async (req, res, next) => {
  const { id } = req.params;
  console.log(res.locals.user, id);
  const track = await Dish.findOne({ where: { id, userId: res.locals.user.id } });
  if (!track) return res.sendStatus(403);
  return next();
};

export default checkAuthor;
