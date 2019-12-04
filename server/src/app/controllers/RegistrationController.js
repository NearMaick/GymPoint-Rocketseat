import { parseISO, addDays } from 'date-fns';
import Registration from '../models/Registration';
import Plan from '../models/Plan';

class RegistrationController {
  async store(req, res) {
    const { student_id, plan_id, start_date } = req.body;

    const checkRegistration = await Registration.findOne({
      where: { student_id },
    });

    if (checkRegistration) {
      return res
        .status(400)
        .json({ error: 'This registration already exists' });
    }

    const { duration, price } = await Plan.findByPk(plan_id);

    const end_date = addDays(parseISO(start_date), duration);

    const total = price * (duration / 30);

    const registration = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price: total,
    });

    return res.json(registration);
  }

  async update(req, res) {
    const { student_id, plan_id, start_date } = req.body;
    const registration = await Registration.findOne({
      where: { student_id },
    });

    const { duration, price } = await Plan.findByPk(plan_id);

    const end_date = addDays(parseISO(start_date), duration);

    const total = price * (duration / 30);

    await registration.update({
      student_id,
      plan_id,
      start_date,
      end_date,
      price: total,
    });

    return res.json(registration);
  }

  async index(req, res) {
    const studentsList = await Registration.findAll();

    return res.json(studentsList);
  }
}

export default new RegistrationController();
