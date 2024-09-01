import { NextFunction, Request, Response } from 'express';
import { CreateProductRequest, UpdateProductRequest } from '../models/product-model';
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

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const request: UpdateProductRequest = req.body as CreateProductRequest;
      const response = await ProductServive.update(req.params.id, request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductServive.delete(req.params.id);
      res.status(200).json({
        data: 'success.',
      });
    } catch (e) {
      next(e);
    }
  }

  static async get(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await ProductServive.get();
      res.status(200).json({
        data: products,
      });
    } catch (e) {
      next(e);
    }
  }
}
