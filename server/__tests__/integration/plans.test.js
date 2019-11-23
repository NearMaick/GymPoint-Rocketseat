import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';
import factory from '../factory';

describe('Plans', () => {
  beforeEach(async () => {
    await truncate();
  });
  it('should be able to register a gym plan', async () => {
    const plan = await factory.attrs('Plan');
    const user = await factory.create('User', {
      email: 'admin@gympoint.com',
      password: '123456',
    });

    const response = await request(app)
      .post('/plans')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send(plan);

    expect(response.body).toHaveProperty('id');
  });
});
