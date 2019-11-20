import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';

import User from '../../src/app/models/User';
import truncate from '../util/truncate';

let token;

beforeAll(done => {
  request(app)
    .post('/sessions')
    .send({
      name: 'Administrador',
      email: 'admin@gympoint.com',
      password: '123456',
    })
    .end((err, res) => {
      if (err) throw err;
      token = res.body.token;
      done();
    });
  console.log(token);
});

describe('Student', () => {
  it('should be able to register without authentication', async () => {
    const response = await request(app)
      .post('/student')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Maick Souza',
        email: 'maico_souza@msn.com',
        age: 34,
        weight: 80.2,
        height: 1.68,
        user_id: 1,
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email without authentication', async () => {
    await request(app)
      .post('/student')
      .send({
        name: 'Maick Souza',
        email: 'maico_souza@msn.com',
        age: 34,
        weight: 80.2,
        height: 1.68,
        user_id: 1,
      });

    const response = await request(app)
      .post('/student')
      .send({
        name: 'Maick Souza',
        email: 'maico_souza@msn.com',
        age: 34,
        weight: 80.2,
        height: 1.68,
        user_id: 1,
      });

    expect(response.status).toBe(400);
  });
});
