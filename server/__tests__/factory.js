import faker from 'faker';
import { factory } from 'factory-girl';
import User from '../src/app/models/User';
import Plan from '../src/app/models/Plan';
import Student from '../src/app/models/Student';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
});

factory.define('Student', Student, {
  name: faker.name.findName(),
  is_active: true,
  email: faker.internet.email(),
  age: faker.random.number({ min: 5, max: 100 }),
  weight: faker.random.number({ min: 10, max: 200 }),
  height: faker.random.number({ min: 90, max: 200 }),
});

factory.define('Plan', Plan, {
  title: faker.random.arrayElement(['Start', 'Gold', 'Diamond']),
  duration: faker.random.number({ min: 1, max: 12 }),
  price: faker.random.number({ min: 10, max: 200 }),
});

export default factory;
