import supertest from 'supertest';
import { ProductTest } from './test-utils';
import { logger } from '../src/utils/logging';
import { app } from '../src/index';
import { prisma } from '../src/utils/db';

describe('All products API describe', () => {
  describe('POST /api/products', () => {
    afterEach(async () => {
      await ProductTest.delete();
    });

    it('should invalid validation', async () => {
      const response = await supertest(app).post('/api/products').send({
        name: '',
        price: '',
        image: '',
      });

      logger.debug(response.body);
      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    it('should success create product', async () => {
      const response = await supertest(app).post('/api/products').send({
        name: 'test',
        price: '99999',
        image: 'http://',
      });

      logger.debug(response.body);
      expect(response.status).toBe(200);
      expect(response.body.data.name).toBe('test');
      expect(response.body.data.price).toBe('99999');
      expect(response.body.data.image).toBe('http://');
    });
  });

  describe('PATCH /api/product/:id', () => {
    beforeEach(async () => {
      await ProductTest.create();
    });

    afterEach(async () => {
      await ProductTest.delete();
    });

    it('should tobe invalid', async () => {
      const response = await supertest(app).patch('/api/products/hdhdh').send({ name: 'hhdhdhhd' });

      logger.debug(response.body);
      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });

    it('should tobe success update product', async () => {
      const response = await supertest(app).patch('/api/products/test').send({ price: '88888' });

      logger.debug(response.body);
      expect(response.status).toBe(200);
      expect(response.body.data.price).toBe('88888');
    });
  });

  describe('DELETE /api/product/:id', () => {
    beforeEach(async () => {
      await ProductTest.create();
    });

    afterEach(async () => {
      await ProductTest.delete();
    });

    it('should tobe invalid', async () => {
      const response = await supertest(app).delete('/api/products/hdhdh');

      logger.debug(response.body);
      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });

    it('should tobe success delete product', async () => {
      const response = await supertest(app).delete('/api/products/test');

      logger.debug(response.body);
      expect(response.status).toBe(200);
      expect(response.body.data).toBe('success.');
    });
  });

  describe('GET /api/product', () => {
    beforeEach(async () => {
      await prisma.product.create({
        data: {
          id: 'test1',
          name: 'test',
          price: '99999',
          image: 'http://',
        },
      });

      await prisma.product.create({
        data: {
          id: 'test2',
          name: 'test',
          price: '99999',
          image: 'http://',
        },
      });

      await prisma.product.create({
        data: {
          id: 'test3',
          name: 'test',
          price: '99999',
          image: 'http://',
        },
      });
    });

    afterEach(async () => {
      await prisma.product.delete({
        where: { id: 'test1' },
      });

      await prisma.product.delete({
        where: { id: 'test2' },
      });

      await prisma.product.delete({
        where: { id: 'test3' },
      });
    });

    it('should tobe success get all product', async () => {
      const response = await supertest(app).get('/api/products');

      logger.debug(response.body);
      expect(response.status).toBe(200);
    });
  });
});
