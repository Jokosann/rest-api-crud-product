import { z, ZodType } from 'zod';

export class ProductValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string().min(1).max(250),
    price: z.string(),
    image: z.string(),
  });
}
