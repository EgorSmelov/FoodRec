import express from 'express';
import checkAuthRedirect from '../middlewares/checkAuthRedirect';
import { verifyAccessToken } from '../middlewares/verifyTokens';
import { TodoList } from '../../db/models';

const authRouter = express.Router();

authRouter.get('/reg', checkAuthRedirect, (req, res) => res.render('RegistrationPage'));

authRouter.get('/login', checkAuthRedirect, (req, res) => res.render('LoginPage'));

authRouter.get('/logout', (req, res) => res.clearCookie('accessToken').clearCookie('refreshToken').redirect('/'));