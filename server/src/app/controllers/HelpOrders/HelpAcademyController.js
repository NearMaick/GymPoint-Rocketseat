import HelpOrder from '../../models/HelpOrder';

import Mail from '../../../lib/Mail';
import Student from '../../models/Student';

class HelpAcademyController {
  async update(req, res) {
    const { answer } = req.body;

    const order = await HelpOrder.findByPk(req.params.id);

    const { name, email } = await Student.findByPk(order.student_id);

    const date = new Date();

    await order.update({
      answer,
      answer_at: date,
    });

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Pergunta respondida',
      text: `
        Pergunta: ${order.question}
        Resposta: ${answer}
      `,
    });

    return res.json(order);
  }

  async index(req, res) {
    const order = await HelpOrder.findAll({
      where: { answer: null },
      attributes: ['id', 'question'],
      include: [
        {
          model: Student,
          as: 'students',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(order);
  }
}

export default new HelpAcademyController();
