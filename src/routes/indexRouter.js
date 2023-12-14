import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const dishes = [
    {
      id: 1, title: 'Борщ', img: 'https://proprikol.ru/wp-content/uploads/2020/04/kartinki-borshh-21.jpg', ingridients: 20, time: 20,
    },
    {
      id: 2, title: 'Пюре', img: 'https://sovkusom.ru/wp-content/uploads/blog/k/kartofelnoye-pyure/5.jpg', ingridients: 10, time: 30,
    },
  ];
  res.render('IndexPage', { dishes });
});

export default router;
