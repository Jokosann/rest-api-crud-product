import { NextFunction, Request, Response } from 'express';
import { CreateProductRequest } from '../models/product-model';
import { ProductServive } from '../services/product-service';

export class ProductController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateProductRequest = req.body as CreateProductRequest;
      const response = await ProductServive.create(request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}
