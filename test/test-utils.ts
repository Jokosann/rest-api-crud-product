import { prisma } from '../src/utils/db';

export class ProductTest {
  static async delete() {
    await prisma.product.deleteMany({
      where: {
        name: 'test',
      },
    });
  }
}
