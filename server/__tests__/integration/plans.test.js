import request from 'supertest';
import app from '../../src/app';

describe('Plans', () => {
  it('should be able to register a gym plan', async () => {
    const response = await request(app)
      .post('/plans')
      .send({
        title: 'gold',
        duration: 90,
        price: 149.9,
      });

    expect(response.body).toHaveProperty('id');
  });
});
