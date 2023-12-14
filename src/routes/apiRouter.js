import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/sortTimeAZ', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/sortTimeZA', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/sortIngridientsAZ', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/sortIngridientsZA', (req, res) => {
  res.json({ hello: 'world' });
});

export default router;
