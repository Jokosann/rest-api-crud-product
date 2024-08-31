import supertest from 'supertest';
import { ProductTest } from './test-utils';
import { logger } from '../src/utils/logging';
import { app } from '../src/index';

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
});
