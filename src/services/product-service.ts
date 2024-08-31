import { CreateProductRequest, ProductResponse, toProductResponse } from '../models/product-model';
import { prisma } from '../utils/db';
import { ProductValidation } from '../validations/product-validation';
import { Validation } from '../validations/validation';

export class ProductServive {
  static async create(request: CreateProductRequest): Promise<ProductResponse> {
    const productRequest = Validation.validate(ProductValidation.CREATE, request);

    const product = await prisma.product.create({
      data: productRequest,
    });

    return toProductResponse(product);
  }
}
