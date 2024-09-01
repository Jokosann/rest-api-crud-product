import express from 'express';
import { router } from './routes';
import { errorMiddleware } from './middleware/error-middleware';
import CONFIG from './utils/environment';
import { logger } from './utils/logging';

export const app = express();

// json
app.use(express.json());

// routing
app.use(router);

// erorr middleware
app.use(errorMiddleware);

app.listen(CONFIG.port, () => logger.info(`Server is listening in port ${CONFIG.port}`));
