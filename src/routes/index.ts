import express from 'express';
import { ProductController } from '../controllers/product-controller';

export const router = express.Router();

// routers
router.post('/api/products', ProductController.create);
router.patch('/api/products/:id', ProductController.update);
