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
import { ResponseError } from '../errors/response-error';

export class ProductServive {
  static async checkProductMustExists(id: string): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new ResponseError(404, 'Product Not Found!');
    }

    return product;
  }

  static async create(request: CreateProductRequest): Promise<ProductResponse> {
    const createRequest = Validation.validate(ProductValidation.CREATE, request);

    const product = await prisma.product.create({
      data: createRequest,
    });

    return toProductResponse(product);
  }

  static async update(id: string, request: UpdateProductRequest): Promise<ProductResponse> {
    const updateRequest = Validation.validate(ProductValidation.UPDATE, request);

    await this.checkProductMustExists(id);

    const result = await prisma.product.update({
      where: { id },
      data: updateRequest,
    });

    return toProductResponse(result);
  }

  static async delete(id: string): Promise<void> {
    await this.checkProductMustExists(id);

    await prisma.product.delete({
      where: { id },
    });
  }

  static async get(): Promise<any> {
    const products = await prisma.product.findMany();

    return products;
  }
}
