import express from 'express';
import { router } from './routes';
import { errorMiddleware } from './middleware/error-middleware';

export const app = express();

// json
app.use(express.json());

// routing
app.use(router);

// erorr middleware
app.use(errorMiddleware);
