import { prisma } from '../src/utils/db';

export class ProductTest {
  static async delete() {
    await prisma.product.deleteMany();
  }

  static async create() {
    await prisma.product.create({
      data: {
        id: 'test',
        name: 'test',
        price: '99999',
        image: 'http://',
      },
    });
  }
}
