import express from 'express';
import checkAuthRedirect from '../../middlewares/checkAuthRedirect';
import { verifyAccessToken } from '../../middlewares/verifyTokens';

const authRouter = express.Router();

authRouter.get('/reg', checkAuthRedirect, (req, res) => res.render('RegistrationPage'));

authRouter.get('/login', checkAuthRedirect, (req, res) => res.render('LoginPage'));

authRouter.get('/logout', (req, res) => res.clearCookie('accessToken').clearCookie('refreshToken').redirect('/'));
authRouter.get('/profile', verifyAccessToken, (req, res) => res.render('ProfilePage'));

export default authRouter;
