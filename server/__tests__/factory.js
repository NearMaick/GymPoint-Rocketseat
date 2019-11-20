import faker from 'faker';
import { factory } from 'factory-girl';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
});
