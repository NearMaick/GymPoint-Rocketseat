import * as Yup from 'yup';
import HelpOrder from '../../models/HelpOrder';

class HelpStudentController {
  async create(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const { question } = req.body;

    const order = await HelpOrder.create({
      student_id: id,
      question,
      answer: null,
      answer_at: null,
    });

    return res.json(order);
  }

  async index(req, res) {
    const order = await HelpOrder.findAll({
      where: { student_id: req.params.id },
    });

    return res.json(order);
  }
}

export default new HelpStudentController();
