import HelpOrder from '../../models/HelpOrder';

class HelpStudentController {
  async create(req, res) {
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
