import bcrypt from 'bcryptjs';

import User from '../../src/app/models/User';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be encrypt password when new user created', async () => {
    const user = await User.create({
      name: 'Administrador',
      email: 'admin@gympoint.com',
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });
});
