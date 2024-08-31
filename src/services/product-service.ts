import { Product } from '@prisma/client';
import {
  CreateProductRequest,
  ProductResponse,
  toProductResponse,
  UpdateProductRequest,
} from '../models/product-model';
import { prisma } from '../utils/db';
import { ProductValidation } from '../validations/product-validation';
import { Validation } from '../validations/validation';

export class ProductServive {
  static async create(request: CreateProductRequest): Promise<ProductResponse> {
    const createRequest = Validation.validate(ProductValidation.CREATE, request);

    const product = await prisma.product.create({
      data: createRequest,
    });

    return toProductResponse(product);
  }

  static async update(id: string, request: UpdateProductRequest): Promise<ProductResponse> {
    const updateRequest = Validation.validate(ProductValidation.UPDATE, request);

    const result = await prisma.product.update({
      where: { id },
      data: updateRequest,
    });

    return toProductResponse(result);
  }
}
