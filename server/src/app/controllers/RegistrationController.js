import { parseISO, differenceInCalendarDays } from 'date-fns';
import Registration from '../models/Registration';
import Plan from '../models/Plan';

class RegistrationController {
  async store(req, res) {
    const { student_id, plan_id, start_date, end_date } = req.body;

    const { price } = await Plan.findByPk(plan_id);

    const days = differenceInCalendarDays(
      parseISO(end_date),
      parseISO(start_date)
    );

    const month = Math.trunc(days / 30);

    const total = price * month;

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
    const { userId } = req;
    const { name, is_active, email, age, weight, height } = req.body;

    // const student = await Registration.findByPk(req.params.id);

    // await student.update({
    //   user_id: userId,
    //   is_active,
    //   name,
    //   email,
    //   age,
    //   weight,
    //   height,
    // });

    return res.json(student);
  }

  async index(req, res) {
    return res.json({ ok: true });
  }
}

export default new RegistrationController();
