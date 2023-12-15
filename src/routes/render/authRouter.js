import express from 'express';
import checkAuthRedirect from '../../middlewares/checkAuthRedirect';
import { verifyAccessToken } from '../../middlewares/verifyTokens';

const authRouter = express.Router();

authRouter.get('/reg', checkAuthRedirect, (req, res) => {
  try {
    res.render('RegistrationPage');
  } catch (error) {
    res.status(500);
  }
});

authRouter.get('/login', checkAuthRedirect, (req, res) => {
  try {
    res.render('LoginPage');
  } catch (error) {
    res.status(500);
  }
});

authRouter.get('/logout', (req, res) => {
  try {
    res.clearCookie('accessToken').clearCookie('refreshToken').redirect('/');
  } catch (error) {
    res.status(500);
  }
});

authRouter.get('/profile', verifyAccessToken, (req, res) => {
  try {
    res.render('ProfilePage');
  } catch (error) {
    res.status(500);
  }
});

export default authRouter;
