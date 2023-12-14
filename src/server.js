import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/render/indexRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';
import apiRouter from './routes/api/apiRouter';
import authRouter from './routes/render/authRouter';
import resLocals from './middlewares/resLocals';
import dishRouter from './routes/render/dishRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);

app.use('/api/auth', apiAuthRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/dishes', dishRouter);
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
