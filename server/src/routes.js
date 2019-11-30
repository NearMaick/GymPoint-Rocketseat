import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';
import HelpStudentController from './app/controllers/HelpOrders/HelpStudentController';
import HelpAcademyController from './app/controllers/HelpOrders/HelpAcademyController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/students/:id/checkins', CheckinController.store);

routes.post('/students/:id/help-orders', HelpStudentController.create);
routes.get('/students/:id/help-orders', HelpStudentController.index);

// routes.use(authMiddleware);

routes.get('/student', StudentController.index);
routes.post('/student', StudentController.store);
routes.put('/student/:id', StudentController.update);

routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);
routes.get('/plans', PlanController.index);

routes.post('/registration', RegistrationController.store);

routes.get('/students/:id/checkins', CheckinController.index);

routes.get('/students/help-orders', HelpAcademyController.index);

routes.put('/students/help-orders/:id/answer', HelpAcademyController.update);

export default routes;
