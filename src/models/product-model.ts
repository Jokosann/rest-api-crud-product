import { Product } from '@prisma/client';

export type IProduct = {
  name: string;
  price: string;
  image: string;
};

export type UpdateProductRequest = {
  name?: string;
  price?: string;
  image?: string;
};

export type CreateProductRequest = IProduct;
export type ProductResponse = IProduct;

export function toProductResponse(product: Product) {
  return {
    name: product.name,
    price: product.price,
    image: product.image,
  };
}
