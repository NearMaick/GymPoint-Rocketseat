import { parseISO, addDays } from 'date-fns';
import Registration from '../models/Registration';
import Plan from '../models/Plan';
import Student from '../models/Student';

import Mail from '../../lib/Mail';

class RegistrationController {
  async store(req, res) {
    const { student_id, plan_id, start_date, end_date, price } = req.body;

    const checkRegistration = await Registration.findOne({
      where: { student_id },
    });

    if (checkRegistration) {
      return res
        .status(400)
        .json({ error: 'This registration already exists' });
    }

    const { name, email } = await Student.findByPk(student_id);

    const { title } = await Plan.findByPk(plan_id);

    const registration = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Matrícula efetuada com sucesso',
      text: `Parabéns ${name}, seja bem vindo a nossa academia.
      Segue abaixo os dados da sua matrícula:
        Plano: ${title}
        Data de término: ${end_date}
        Valor: ${price}
      `,
    });

    return res.json(registration);
  }

  async update(req, res) {
    const { student_id, plan_id, start_date } = req.body;
    const registration = await Registration.findOne({
      where: { student_id },
    });

    const { duration, price } = await Plan.findByPk(plan_id);

    const end_date = addDays(parseISO(start_date), duration * 30);

    const total = price * duration;

    await registration.update({
      student_id,
      plan_id,
      start_date,
      end_date,
      price: total,
    });

    return res.json(registration);
  }

  async delete(req, res) {
    Registration.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json();
  }

  async index(req, res) {
    const registrations = await Registration.findAll({
      attributes: ['id', 'end_date', 'price', 'is_active'],
      include: [
        {
          model: Student,
          as: 'students',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(registrations);
  }
}

export default new RegistrationController();
