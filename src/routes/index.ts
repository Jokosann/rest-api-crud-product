import express, { NextFunction, Request, Response } from 'express';
import { ProductController } from '../controllers/product-controller';
import { logger } from '../utils/logging';

export const router = express.Router();

// routers
router.get('/api', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: 'Welcome to CRUD app from Joko Santoso',
  });
});
router.post('/api/products', ProductController.create);
router.patch('/api/products/:id', ProductController.update);
router.delete('/api/products/:id', ProductController.delete);
router.get('/api/products', ProductController.get);
